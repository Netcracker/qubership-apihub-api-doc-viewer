# JSON Schema на новом стеке (next-data-model + shared-components) — анализ готовности и план

## 1. Назначение документа

Анализ технической возможности перевести рендеринг JSON Schema с legacy-стека
(`api-data-model` + `api-state-model` + `components/JsonSchemaViewer` + `components/common`) на новый стек
(`next-data-model` + `shared-components`), по образцу того, как это уже сделано для `ddlapi` и `async-api`.

Документ отвечает на три вопроса:

1. Готов ли новый стек к тому, чтобы JSON Schema стала на нём ещё одним API type — с учётом циклических ссылок,
   которых нет ни в JSO, ни в DDL API?
2. Если готов — какие изменения нужны, какие архитектурные решения возможны и какова их сложность отдельно в
   режиме `doc viewer` и в режиме `doc with diffs viewer`?
3. Оформить это как рабочий документ.

Имена файлов, сигнатуры и количественные оценки приведены как ориентир на момент написания — источником истины остаётся код.

## 2. Вердикт

**Возможность есть, полной или очень масштабной переработки модели и React-компонентов не требуется.**
Ключевые механизмы, которых боялись («циклы», «комбинаторы», «рекурсия»), в абстрактном слое `next-data-model`
уже заложены: `isCycle` / `createCycledClone` / `preventInfiniteLoopHook` для циклов и complex-узлы с
`nestedNodes()` для комбинаторов. Crawl-правила JSON Schema в legacy уже написаны на том же `json-crawl`, что и
новый стек, и переносятся почти буквально.

Но начинать с самого sub-layer'а `json-schema` **нельзя**. Сначала нужно закрыть четыре пробела, три из которых
находятся в абстрактном слое и ни одним из текущих API types не задействованы:

| # | Пробел | Почему блокер |
| --- | --- | --- |
| 1 | Нет ленивого / ограниченного по глубине построения дерева | `expandedDepth` — часть публичного контракта legacy-виджета, им пользуются все внешние потребители; без ограничения глубины схемы с массовым переиспользованием `$ref` дают комбинаторный взрыв дерева |
| 2 | Цикл-клоны реализованы наполовину | Дети снимаются снапшотом в момент обнаружения цикла (родитель ещё не обойдён), diffs на клон не назначаются вовсе; unit-тестов на циклы в `next-data-model` нет ни одного |
| 3 | Рекурсивные viewer'ы нового стека не защищены от циклов | `JsoPropertyNodeViewer` стартует с `useState(true)` и рендерит детей безусловно — на цикл-клоне это неограниченная рекурсия React |
| 4 | Примитивы строк не обобщены | `AdditionalInfoRow` живёт под `DdlTableViewer/` и завязан на DDL-CSS; `Selector` живёт под `AsyncApiOperationViewer/` и типизирован `AsyncApiTreeNode` |

Отдельно и безусловно: **`api-state-model` не переносится и не воспроизводится** — слой противоречит природе
React (раздел 10.3). Раскрытие и выбор ветки комбинатора остаются обычным состоянием React.

**Рекомендуемая архитектура:** отдельный API type `json-schema` в `next-data-model` (по образцу `ddlapi` и
`async-api`), а **не** расширение JSO новыми kind'ами. Идея «JSON Schema — просто ещё один kind внутри
`JsoViewer`» в исходном виде проигрывает по трём причинам (раздел 6), но её полезная часть — единая точка
встраивания — сохраняется: JSO и JSON Schema остаются во взаимной композиции, только через явный
контракт вместо прямых импортов.

**Объём.** Это самая крупная миграция из уже сделанных на новом стеке: по числу kind'ов и по объёму
валидационной поверхности sub-layer сопоставим с `ddlapi` (≈7.4 kLOC модели против ≈3.2 kLOC у `async-api`).
Режим diffs дороже режима doc примерно в 1.5–2 раза — за счёт агрегаторов, наследования node-level diff'ов
через комбинаторы и side-display резолверов для списочных значений.

## 3. Входной контракт

### 3.1 Документ

Оба стека получают уже подготовленный документ, а не сырую схему:

```text
исходный OpenAPI/AsyncAPI
  → normalize(source, { unify: true, liftCombiners: true, validate: true, syntheticTitleFlag })
  → denormalize(...)                                     // api-unifier
  → фрагмент схемы по пути (см. stories/preprocess.ts)
```

Следствия, важные для проектирования:

- `$ref` разрешены в **реальный граф JS-объектов**. Циклические ссылки — это настоящие циклы по ссылкам, а не
  строки `$ref`. Именно поэтому в stories есть флаг `circular` и `stringifyCyclicJso` (`preprocess.ts`).
- `liftCombiners: true` поднимает `oneOf` / `anyOf` / `allOf` наверх каждого узла схемы. Комбинатор — это
  свойство узла, а не произвольная вложенность, и он ровно один на узел. Это то, что legacy моделирует
  `ModelTreeComplexNode`, а новый стек — `ComplexTreeNode` + `nestedNodes()`.
- Нерезолвящийся `$ref` остаётся в документе и в legacy попадает в `meta.brokenRef`
  (`json-schema/tree/model.ts`), а в UI — в `NodeType` с иконкой предупреждения.

Для diffs добавляется `apiDiff(before, after, { metaKey, ... }).merged` — документ со symbol-ключами
метаданных. Legacy-виджет дополнительно требует, чтобы потребитель сам вызвал `aggregateDiffsWithRollup`
(`JsonSchemaDiffViewer.tsx`); в новом стеке этот шаг выполняет spec-трансформер — так делает
`AsyncApiSpecWithDiffsTransformer`.

### 3.2 Публичный контракт legacy-виджета

Это ограничение, а не пожелание: любой новый компонент либо повторяет этот контракт, либо потребители
переписываются синхронно.

| Prop | Кто использует |
| --- | --- |
| `schema` | все |
| `displayMode` | `apispec-view` (Body, Parameters, Responses, Model) |
| `expandedDepth` | `apispec-view` (все 4 точки), значение приходит из настроек пользователя |
| `overriddenKind='parameters'` | `apispec-view`, внутренние AsyncAPI/JSO-встраивания |
| `layoutMode`, `filters`, `metaKeys` | `apispec-view` diffs-точки |
| `topLevelPropsMediaTypes` | `apispec-view` Parameters |
| `customizationOptions.headerRowTitle` | внутренние потребители |

Потребители:

| Репозиторий / пакет | Точки |
| --- | --- |
| `qubership-apihub-apispec-view` / `diff-elements-core` | `HttpOperation/Body.tsx`, `HttpOperation/Parameters.tsx`, `HttpOperation/Responses.tsx` |
| `qubership-apihub-apispec-view` / `elements-core` | `Docs/Model/Model.tsx`, `Docs/HttpOperation/Body.tsx` |
| `qubership-apihub-ui` | `shared/components/JsonSchemaViewer.tsx` (обёртка) → `SchemaContextPanel`, `FormatViewer`, `DocSpecView`; отдельно `SpecificationDialog/JsonSchemaSpecViewer` |
| `api-doc-viewer` (внутри) | `MessageContentNodeViewer` (payload, headers), `MessageChannelParametersNodeViewer`, `JsoPropertyNodeViewer` / `...WithDiffs` (вложенная схема) |

`Parameters.tsx` дополнительно **дописывает diff-метаданные в `schema.properties`** перед передачей во
viewer (`mergeMirrorSymbolsForDiffMeta`). Это тот же приём, что `wrapJsonSchemaForDiffsViewer` внутри
`api-doc-viewer`, и его надо учесть в контракте нового компонента.

## 4. Что рендерит legacy-стек

### 4.1 Узлы

`kind` (`api-data-model/src/json-schema/constants.ts`): `root`, `definition`, `property`,
`additionalProperties`, `patternProperty`, `items`, `item`, `additionalItems`, `allOf`, `anyOf`, `oneOf`.

`type` (`ModelTreeNodeType`): `simple` | `oneOf` | `anyOf` | `allOf`.

**Важное расхождение с новым стеком:** в `next-data-model` `TreeNodeComplexityType` имеет только `simple` и
`complex`. Разновидность комбинатора там не выражается типом узла — её надо нести в `kind` (что legacy и так
делает: `kind: 'oneOf'`) и/или в value/meta. Дополнительного механизма не требуется.

`meta` legacy-узла: `deprecated`, `readOnly`, `writeOnly`, `externalDocs`, `required`, `brokenRef`, `_fragment`.

### 4.2 Строки и их аналоги в новом стеке

| Строка / элемент | Legacy | Аналог в новом стеке | Готовность |
| --- | --- | --- | --- |
| Заголовок узла (expander, имя, тип, флаги) | `internal/layout/HeaderRow.tsx` (326 LOC) | `TitleRow` + `subheader(layoutSide)` | есть; нужен JSON-Schema-специфичный subheader |
| Имя свойства, `required`-звёздочка, переименование | `common/NodeTitle.tsx` | `TextValue` (`diff.data.beforeKey/afterKey`) + чипы в subheader | есть |
| Метка типа: type, format, nullable, комбинатор, `brokenRef` | `common/NodeType.tsx` (520 LOC) | резолвер side-display в data-слое + сегментированный вывод | нужен новый резолвер; образец — `resolveColumnTypeLabelSideDisplay` |
| Флаги `deprecated` / `readOnly` / `writeOnly` | `common/diffs/DiffTags.tsx` | `UxBadge` в subheader + flag-diff контракт | есть контракт (DDL `aggregateFlagDiff`), нет JSON-Schema-агрегаторов |
| Описание (markdown, «Show more») | `common/annotations/Description/DescriptionRow.tsx` (366 LOC) | `TextRow` | `TextRow` не умеет markdown — нужен вариант или проп |
| Причина deprecation | `common/annotations/DeprecationReasonRow.tsx` (264 LOC) | `TextRow` | как выше |
| Валидации-скаляры (`pattern`, `minLength`, `multipleOf`, …) | `internal/validations/Validations.tsx` + `AdditionalInfoObjectRow` (409 LOC) | `AdditionalInfoRow` + `AdditionalInfoPiece` | нужно вынести в `shared-components` |
| Валидации-списки (`enum`, `examples`, `default`, `const`) | `AdditionalInfoArrayRow.tsx` (320 LOC) | `AdditionalInfoRow` + `DdlCommaSeparatedListWithDiffs` + `resolveListSideItems` | база есть в DDL, нужно обобщить |
| Диапазоны значений (композиция min/max/exclusive) | `internal/validations/useValueRangeValidation.ts` (448 LOC) | резолвер в data-слое | целиком уезжает в модель |
| Выбор ветки комбинатора | `common/SelectNestedNodeRow/SelectNestedNodeRow.tsx` (301 LOC) | `Selector` | нужно обобщить и добить (см. 5.5) |
| Заголовок вложенности массива | `GraphSchemaViewer/.../NestingIndicatorTitleRow` | `TitleRow` с отдельным `usage` | решается конфигурацией |
| Блок `x-*` расширений | `internal/extensions/Extensions.tsx` (242 LOC) | `JsoViewer` / `JsoDiffsViewer` | уже на новом стеке |
| Сводка diff'ов на свёрнутом узле | `UxMarkerPanel` в `HeaderRow` | `UxMarkerPanel` + `descendantDiffsSummary` | есть (используется в JSO) |

Итого во view-слое: ~1.1 kLOC собственно `JsonSchemaViewer` плюс ~4.2 kLOC `components/common`, из которых
JSON Schema использует большую часть (остальное делит с GraphQL-viewer'ами).

## 5. Готовность нового стека

### 5.1 Что переиспользуется как есть

- **Абстрактная модель.** `ITreeNode` / `ITreeNodeWithDiffs`, `SimpleTreeNode` / `ComplexTreeNode`, реестр
  узлов `Tree.nodes`, разделение `parent` (дети) и `container` (nested-ветки). Полностью покрывает потребности
  JSON Schema, включая комбинаторы.
- **Crawl-инфраструктура.** `createTreeBuildingHooks` даёт три хука (цикл-guard → трансформеры → создание
  узлов), правила `CrawlRules` с `kind`, `complex`, `transformers` по путям. Legacy-правила
  (`json-schema/rules.ts`) — ровно такая же структура; перенос почти механический.
- **Наследование билдеров.** `<Spec>TreeWithDiffsBuilder extends <Spec>TreeBuilder` с точками расширения
  `createTree` / `createNodeDataBuilder` / `prepareSource` / `takeCrawlValue` / `logPrefix` — как в
  `async-api` и `ddlapi`.
- **Пять семейств агрегаторов diff'ов** плюс `NodeDiffsSeverities` с плейсментами по строкам.
- **Sub-layer видимости узлов** (`node-visibility-data`) — методичка и референс на DDL уже есть.
- **Строковые примитивы.** `TitleRow`, `TextRow`, `TextValue`, `SideBySideLayout`, `OneSideLayout`,
  `DiffFloatingBadgeWrapper`, `LevelIndicator`, `Expander`, `buildRowDiffProps` / `toNodeDiffState`,
  `DiffsClassesBuilder`, `LevelContext` / `AsyncLevelContext`, `PrecededBy`.
- **Шаблон рекурсивного viewer'а.** `JsoPropertyNodeViewer` / `...WithDiffs` — это уже рекурсия с expander'ом
  и инкрементом уровня; структурно именно то, что нужно JSON Schema.

### 5.2 Пробел 1: нет ленивого и ограниченного по глубине построения

`TreeBuilder.build()` во всех спеках — один синхронный `syncCrawl` по всему документу. В `next-data-model` нет
ни `maxTreeLevel`, ни `expand()`, ни отложенных колбэков построения. Legacy делает три уровня отложенности:

| Уровень | Механизм (legacy) |
| --- | --- |
| Дерево | `DEFAULT_MAX_TREE_LEVEL = 2` в `json-schema/tree/build.ts`; при превышении crawl останавливается, узел получает `_expandingCallback`, который до-крawl'ит поддерево при первом `expand()` |
| Состояние | `JsonSchemaState*` строит детей только при первом раскрытии |
| React | `JsonPropNodeViewer` монтирует детей только когда `expanded` |

Почему это блокер, а не оптимизация:

1. `expandedDepth` — публичный prop, которым пользуются все внешние точки (раздел 3.2). Его семантику нельзя
   получить, если дерево всегда построено целиком.
2. Цикл-guard делает обход **конечным**, но не **компактным**. Кэш `alreadyConvertedValuesCache` копируется на
   каждом узле (`new Map(state.alreadyConvertedValuesCache)`), то есть он **путевой**: повтор значения
   детектируется только вдоль текущей ветки. Это корректная семантика цикла, но она означает, что
   *нецикличное* переиспользование одной схемы в 50 местах раскрывается 50 раз целиком. На реальных OpenAPI с
   общими моделями это даёт взрыв и по времени построения, и по памяти.

#### Что именно плохо в legacy-механизме

Уточнение формулировки: второе дерево там не строится и не «линкуется». Возобновлённый `syncCrawl` использует
те же хуки, замкнутые на тот же экземпляр `ModelTree`, поэтому узлы попадают в то же дерево через
`parent.addChild(...)`. Плохо другое — точка входа в обход дублируется на каждом узле
(`_expandingCallback` в `model-tree-node.impl.ts`), и отсюда шесть дефектов:

1. **Стоимость самой «ленивости».** Каждый узел держит замыкание с захваченным фрагментом документа, свежим
   массивом хуков (`crawlHooksJsonSchemaTree(tree, value)` вызывается на каждый узел) и **копией** `Map`
   предков (`new Map(state.alreadyConvertedMappingStack)`). Это O(узлов × глубины) памяти на инфраструктуру
   экономии памяти.
2. **Второй, параллельный вывод `id`.** В ленивом контексте `nodeIdPrefix: id`, в обычном переходе состояния
   префикс не меняется, и работает это только за счёт режима `skipRootLevel`.
3. **Ленивость не работает там, где нужна.** `isExpandableTreeNode` (`api-state-model/src/utils.ts`) вызывает
   `node.expand().children()`, то есть построение детей форсируется для каждого узла, дошедшего до
   отображения. Фактическая граница построения — на уровень глубже заявленной, и достигается принудительно.
4. **`expand()` без состояния, `collapse()` разрушающий.** «Детей ещё не строили» и «детей нет» различаются
   только по `_children.length > 0`, поэтому для пустого объекта коллбэк выполняется заново каждый раз.
   `collapse()` очищает `_children`, при этом записи в `tree.nodes` остаются — повторное раскрытие создаёт
   новые объекты узлов на те же `id`.
5. **Циклы держатся на алиасинге.** `createCycledClone` передаёт `_children` по ссылке и не передаёт
   `lazyBuildingContext`: клон сам раскрыться не может, но «оживает», если позже раскроют оригинал. Работает
   случайно и ломается ровно при переходе к копированию — как и произошло в `next-data-model` (пробел 2).
6. **Производные данные считаются от неполного дерева** — сводки по diffs всплывают от детей к родителям,
   а дети появляются позже.

#### Два факта про `json-crawl`, которые меняют дизайн

- **`exitHook` поддерживается** (`CrawlHookResponse.exitHook` — коллбэк на выходе из узла). Ни
  `api-data-model`, ни `next-data-model` его не используют; именно поэтому множество предков реализовано
  копированием `Map`, тогда как при DFS достаточно одного мутабельного множества с `add` на входе и `delete`
  на выходе.
- **`breadthFirstTraverse` есть в пакете** — обход по уровням, концептуально совпадающий с «построить до
  уровня N».

#### Рекомендуемый подход

Отложенная материализация как деталь реализации билдера, а не протокол между узлом и потребителем. Код и
сквозной прогон по всем шести принципам — в приложении A.

1. **Отложенная работа — данные во владении билдера, а не замыкание на узле.** Вместо `_expandingCallback`
   билдер держит одну очередь незавершённых участков (`{ nodeId, path, fragment, rules }`). Узел хранит только
   ссылку на свой фрагмент документа: ни хуков, ни `Map`, ни захваченного состояния обхода.
2. **Цепочка предков выводится из дерева, а не хранится.** Главный выигрыш от единого дерева: раскрыть можно
   только существующий узел, значит все его предки материализованы, и цепочку фрагментов для проверки цикла
   достаточно собрать подъёмом по `parent` / `container` за O(глубины) в момент раскрытия. При полном обходе
   тот же инвариант держится одним мутабельным множеством через `exitHook`.
3. **Раскрываемость вычисляется при создании узла — но как свойство варианта, а не узла** (см. ниже).
4. **Модель только растёт.** Материализация идемпотентна и монотонна: повторный вызов не создаёт новых
   объектов и не меняет `id`. Свёрнутость — состояние вида, а не операция над моделью; разрушающий
   `collapse()` из модели уходит, «дети материализованы» — отдельный флаг, а не вывод по `length`.
5. **`id` выводится только из пути, одним правилом.** Элемент очереди несёт полный `path`, поэтому и при
   полном обходе, и при доматериализации `id` считается одинаково; `nodeIdPrefix` как второй механизм не нужен.
6. **Граница останова — только на простых узлах.** Комплексный узел материализуется вместе со своей
   **цепочкой** комбинаторов (см. ниже), потому что это не уровень данных, а выбор представления.

```ts
interface LazyTreeBuilder {
  // full crawl limited by depth; returns a tree with a materialization frontier
  build(source: object, options?: { materializeDepth?: number }): ITree

  // idempotent, monotonic; no-op if already materialized
  materializeChildren(node: ITreeNode, depth?: number): void
}
```

`materializeChildren` вызывается из обработчика раскрытия, а не из `childrenNodes()`. Вариант с материализацией
внутри геттера эргономичнее (интерфейс `ITreeNode` не меняется, вьюеры не знают о ленивости) и безопасен
благодаря идемпотентности, но это побочный эффект в рендере — под StrictMode и concurrent-рендерингом такое
лучше не заводить без необходимости.

#### Раскрываемость: свойство варианта, а не узла

Наивный булев флаг `isExpandable` на узле неверен. Для простого фрагмента признак решается локально, но для
комбинатора эффективный тип узла зависит от **выбранной ветки**, а ветка сама может быть комбинатором:

```yaml
first:
  oneOf:
    - oneOf:
        - type: string          # не раскрываем
        - type: object          # раскрываем
          properties:
            second: { type: number }
    - type: array               # раскрываем
      items: { type: boolean }
```

`liftCombiners` гарантирует не более одного комбинатора **на узел схемы**, но не устраняет вложенность:
ветка комбинатора — это снова узел схемы, и на ней комбинатор может быть свой. Legacy это уже так и трактует:
`buildCombinaryNodes` крутит цикл
`while (node.nested.length > 0) { node = node.nestedNode(selected) ?? node.nested[0] }`, то есть **цепочку
уровней выбора**, по одному состоянию-селектору на уровень. `ComplexTreeNode.childrenNodes(nestedId)`
делегирует ветке, а `findNestedNode(id, true)` ищет по всей цепочке.

Отсюда правило:

- **Простой узел** получает при создании локальный структурный признак `hasOwnChildren` — O(1) по своему
  фрагменту.
- **Комплексный узел** флага не получает вовсе. Ответ делегируется ветке, выбранной на этом уровне:

```text
expandable(node, selection) =
  node.isComplex
    ? expandable(branch(node, selection[level]), selection)   // спуск по цепочке выбора
    : node.hasOwnChildren
```

Рекурсия завершается на первом простом узле цепочки, стоит O(глубины вложенности комбинаторов) при O(1) на
шаг и **не требует материализации детей** — при условии, что принцип 6 выполняется транзитивно: материализуя
комплексный узел, материализуем всю цепочку веток вдоль текущего выбора (ветки одного уровня дёшевы — это узлы
без детей, и селектору всё равно нужны их подписи). Смена ветки достраивает цепочку тем же идемпотентным
вызовом.

Главный инженерный риск здесь — **расхождение предиката и правила создания детей**: если `hasOwnChildren`
говорит «да», а хук создания узлов детей не породил, получаем раскрывашку в пустоту, и наоборот. Поэтому
предикат должен выводиться из того же источника истины, что и правила обхода (какие ключи фрагмента дают
детей: `properties`, `items`, `additionalProperties`, `patternProperties`, …), одной функцией рядом с
`CrawlRules`, а не отдельной реализацией в kind-менеджере. Проверяется инвариантом на полностью
материализованном дереве: `hasOwnChildren === childrenNodes().length > 0` для каждого узла — прогоняется по
всем существующим фикстурам практически бесплатно. В diffs-режиме предикат считается по merged-документу,
поэтому «дети есть хотя бы на одной стороне» получается естественным образом.

#### Обязательное условие для режима diffs

Без этого ленивость с diffs несовместима. Сейчас сводки всплывают вверх (`addDiffsSummary` /
`addDescendantDiffsSummary` в `model/abstract/tree-with-diffs/simple-node.impl.ts` рекурсивно зовут
`container` / `parent`), поэтому у свёрнутого узла сводка окажется неполной — а именно она и нужна для маркера
изменений на свёрнутом узле. Решение уже есть в кодовой базе: читать сводку **вниз**, из
`aggregatedDiffsMetaKey` предварительно свёрнутого документа (`aggregateDiffsWithRollup`), как это делают
kind-менеджеры `node-descendant-diffs-summary`. Всплытие тогда не нужно; побочно уходит и текущая
неэффективность — всплытие вызывается внутри цикла по типам, то есть O(глубины × типов) повторных проходов.

#### Что ленивость не решает

Ленивость сокращает время до первого рендера, но причина комбинаторного роста — не глубина, а повторное
разворачивание одного объекта схемы в разных местах документа (кэш предков путевой). Пользователь, раскрывающий
дерево, всё равно за это заплатит. Настоящее решение — обобщить существующий cycle-clone: вести помимо путевого
множества предков глобальную карту «фрагмент → узел» и при повторной встрече фрагмента создавать отдельный
верхний узел (свой путевой `id`, свои diffs, своё состояние раскрытия), **разделяющий поддерево детей**. Это
DAG в массивах детей при сохранении путевой идентичности узлов на каждом сайте, и корректно постольку,
поскольку diff-метаданные в merged-документе висят на самом объекте и одинаковы для всех сайтов, а контекстные
величины (`required`, уровень вложенности) живут на родителе или в React-контексте. Оговорка: состояние
раскрытия, ключуемое по `id` узла, станет общим для сайтов, разделяющих поддерево. Делать вторым шагом и
только после замеров (Фаза 0, п. 4).

#### Чего делать не стоит

Строить скелет целиком, а полезную нагрузку узлов лениво — для JSON Schema дорога именно структура. Делать
материализацию асинхронной — `syncCrawl` синхронен, асинхронность протечёт во все вьюеры. Заводить отдельный
«ленивый» тип узла — каждый вьюер получит две ветки поведения, то есть ровно ту связность, от которой уходим.

### 5.3 Пробел 2: цикл-клоны недоделаны

Механизм есть и по семантике верный, но по реализации не готов к продуктивному использованию.

Цикл обнаруживается в `preventInfiniteLoopHook`
(`building-service/abstract/json-crawl-entities/hooks/builder.ts`): если значение уже встречалось на текущем
пути, создаётся клон и обход ветки прекращается (`{ done: true }`).

Три конкретные проблемы:

1. **Дети клона — снапшот, снятый слишком рано.** `createCycledClone` вызывает
   `setChildrenNodes(this._childrenNodes)`, а тот копирует элементы в собственный массив клона
   (`simple-node.impl.ts`: `this._childrenNodes.length = 0; this._childrenNodes.push(...)`). В момент
   обнаружения цикла предок ещё обходится: `syncCrawl` идёт в глубину, поэтому у предка заполнена только та
   ветка, внутри которой цикл и нашли. Клон получает **неполный** (нередко пустой) список детей. Legacy этой
   проблемы не имеет: там массив детей передаётся в конструктор и остаётся **общей ссылкой**, поэтому позже
   добавленные дети видны в клоне.
2. **На клон не назначаются diff'ы.** Клон создаётся внутри цикл-guard'а, минуя `createNodeFromRaw`, поэтому
   `assignNodeDiffs` для него не вызывается: `_diffs`, `_descendantDiffs`, `_diffsSeverities` остаются
   пустыми, и цикличный узел в diffs-режиме выглядит неизменённым. Legacy копирует `meta`, в которой лежит
   `$nodeChange`.
3. **Нулевое тестовое покрытие.** В `packages/next-data-model/tests/` нет ни одного упоминания цикла. Для
   `ddlapi` (плоская модель), `async-api` (фиксированная форма) и JSO (обычный JSON) этот код фактически
   мёртв — JSON Schema будет первым потребителем.

Отдельно надо решить, **что показывать** в цикличном узле. Legacy показывает заголовок с иконкой circular-ref
и не раскрывает содержимое. Если сохранить это правило, вопрос неполного снапшота детей теряет остроту — но
только при условии, что viewer гарантированно не раскрывает такие узлы (см. 5.4).

### 5.4 Пробел 3: рекурсивные viewer'ы не защищены от циклов

`JsoPropertyNodeViewer` стартует с `useState(true)` и рендерит `node.childrenNodes()` без условий, кроме
локального `expanded`. На цикл-клоне это неограниченная рекурсия: дети клона ведут вниз по той же ветке, где
снова встретится клон. Legacy защищается явно — `alwaysExpanded && !node.isCycle` в `JsonPropNodeBody`,
`expand()` не спускается в цикличные узлы (`api-state-model`), `isRootNode` исключает клоны.

Для нового JSON-Schema-viewer'а нужно:

- начальное состояние раскрытия из `expandedDepth`, а не `true`;
- `isCycle` как жёсткий стоп: узел не раскрывается автоматически ни при какой глубине;
- решение по продуктовому поведению: цикличный узел вообще нераскрываемый (как сейчас в legacy) или
  раскрываемый вручную с ограничением на повтор.

Правило видимости «цикличный узел не раскрывается» — кандидат в `node-visibility-data`, а не в JSX.

### 5.5 Пробел 4: примитивы строк не обобщены

| Примитив | Где сейчас | Что мешает переиспользовать |
| --- | --- | --- |
| `AdditionalInfoRow` / `AdditionalInfoPiece` | `components/DdlTableViewer/AdditionalInfoRow/` | Хардкод DDL-паддингов (`X_AXIS_PADDING_ROWS_DDL_API_PROPERTIES`, `ddlapi-property-row-body`), `WithDdlListLastRowProps`, DDL-значения `PrecededBy`. Сам контракт (`label` + `subheader(layoutSide)` + `diff` + `colorizingDiff` + `diffsSeverities`) — уже правильный и общий |
| `Selector` | `components/AsyncApiOperationViewer/Selector/` | Типизирован `AsyncApiTreeNode`; нет generic-параметра узла |
| Списки значений с diff'ами | `DdlCommaSeparatedListWithDiffs` + `resolveListSideItems` / `buildCommaSeparatedListSideSegments` | Живут в DDL-ветке; для `enum` / `examples` нужны без изменений семантики |
| Markdown-текст | только в legacy `DescriptionRow` | `TextRow` рендерит plain-текст; нужен markdown-вариант с «Show more» |

Дополнительно: legacy `SelectNestedNodeRow` умеет больше, чем `Selector` — вложенные комбинаторы,
`NestingIndicatorTitle`, и **синхронный выбор ветки между сторонами** в side-by-side
(`onGlobalSelectNestedNode`, `NoSubHeaderContext`). Последнее — не косметика: при разных наборах ветвей до и
после сравнения нужно решить, что показывать на «пустой» стороне. `Selector` этого не умеет, у него только
скрытие опции на нужной стороне по whole-node add/remove.

### 5.6 Чего не хватает в diffs-контрактах

- `NodeDiffsSeverityPlacemennt` содержит `TitleRow`, `DescriptionRow`, `AdditionalInfoRow` (переиспользуются) и
  AsyncAPI-специфичные значения. Для JSON Schema могут понадобиться плейсменты под строку выбора комбинатора и
  под причину deprecation.
- `DiffHiglightingApplicationArea` содержит `Default`, `JsoPropertyKey`, `JsoPropertyValue`. Правила подсветки
  имени свойства у JSON Schema **другие**, чем у DDL: DDL продуктово запрещает жёлтую подсветку имён колонок,
  а legacy JSON Schema переименование подсвечивает (`NodeTitle`, `beforeKey`/`afterKey`). Нужна отдельная
  область и продуктовое подтверждение.
- Фильтры по severity (`filters` / `ChangeSeverityFiltersContext`) в legacy применяются внутри строк; в новом
  стеке `DiffFloatingBadgeWrapper` получает `hidden={false}` с TODO. Prop `filters` — часть публичного
  контракта, значит фильтрацию придётся довести.

## 6. Выбор архитектуры

| Вариант | Суть | Вердикт |
| --- | --- | --- |
| **A** | Отдельный API type: `building-service/json-schema/` + `model/json-schema/` + `shared/json-schema/`, свои kinds, свой value/meta, свои агрегаторы, plain → with-diffs наследование | **Рекомендуется** |
| **B** | JSON Schema как набор новых kind'ов внутри JSO | Не рекомендуется |
| **C** | JSON Schema — «ещё один kind of node» в `JsoViewer` / `JsoDiffsViewer` с кастомным node viewer'ом | В исходном виде не проходит; полезная часть переносится в вариант A (см. 6.3) |

### 6.1 Почему не вариант B

1. **Форма value несовместима.** У JSO ровно один kind (`property`) и одна плоская форма значения
   (`{ title, value, valueType, isPrimitive, isArrayItem, isPredefinedValueSet }`). JSON Schema требует 11
   kind'ов и богатое значение (тип, формат, ~20 валидационных ключей, meta-флаги). Добавление их в JSO
   превращает `JsoTreeNodeValue` в union, после чего **все** JSO-агрегаторы (сейчас — один `kind-any` на
   каждое семейство) и оба JSO-viewer'а обязаны ветвиться.
2. **Правила crawl'а несовместимы по природе.** JSO-правила path-агностичны:
   `{ '/*': recurse, kind: PROPERTY }`. JSON Schema нужны правила **по путям** (`/properties/*`, `/items`,
   `/oneOf/*`, `/additionalProperties`, …). `json-crawl` — движок, управляемый путями, так что смешение
   потребовало бы выбирать kind по форме значения, а не по пути. Это ровно то, от чего уходили.
3. **JSO — худшая из возможных баз для наследования.** По конвенции репозитория JSO — исключение: у него
   параллельные plain / with-diffs стеки, а не `WithDiffs extends Plain`. Наращивание kind'ов именно на нём
   закрепляет исключение вместо того, чтобы его изолировать.

### 6.2 Почему вариант A

Совпадает со всеми конвенциями: `<Spec>TreeWithDiffsBuilder extends <Spec>TreeBuilder`, kind-специфичные
агрегаторы, kind-менеджеры видимости, барели в `model/json-schema/...`. Изолирует 11 kind'ов и валидационную
поверхность от JSO. Даёт возможность выкатывать API type частями (сначала plain, потом diffs), как это уже
делалось для DDL.

### 6.3 Что берём из варианта C

Полезное зерно исходной идеи — **единая точка встраивания одного viewer'а в другой**. Сегодня встраивание
устроено прямыми импортами в обе стороны:

```text
JsoPropertyNodeViewer      → JsonSchemaViewer        (значение свойства оказалось схемой)
JsonSchemaViewer/Extensions → JsoViewer              (блок x-* расширений)
MessageContentNodeViewer   → JsonSchemaDiffViewer    (payload, headers)
```

После миграции это станет взаимной рекурсией между двумя компонентами нового стека, и прямые импорты дадут
циклическую зависимость модулей. Решение: **контракт встраивания** вместо импорта — реестр или props-инъекция
компонента-рендерера (тем же приёмом, что `navigationLinkComponent` в `DdlTableViewer`), плюс, при
необходимости, ленивый импорт. Тогда «JSON Schema как один из видов узла внутри JSO» реализуется на уровне
композиции viewer'ов, а не на уровне одного дерева.

Тот же контракт закрывает и обратную задачу: `AsyncApiOperationViewer` перестаёт знать про конкретный
JSON-Schema-компонент и получает его через точку встраивания.

## 7. Целевая модель данных (вариант A)

### 7.1 Kinds

Переносятся из legacy без изменений: `root`, `definition`, `property`, `additionalProperties`,
`patternProperty`, `items`, `item`, `additionalItems`, `allOf`, `anyOf`, `oneOf`. Комбинаторные kind'ы
обслуживают **complex**-узлы, остальные — **simple**.

### 7.2 Crawl rules

Рекурсивная функция правил по образцу `getAsyncApiCrawlRules`, структура — из legacy `json-schema/rules.ts`:

```text
'/properties/*'        → property
'/additionalProperties'→ additionalProperties
'/patternProperties/*' → patternProperty
'/items'               → items      (числовой ключ → item)
'/additionalItems'     → additionalItems
'/oneOf/*'             → oneOf      (complex на родителе)
'/anyOf/*'             → anyOf      (complex на родителе)
'/allOf/*'             → allOf      (complex на родителе)
```

Трансформеры (`transformers` в правиле): `example` → `examples[]`, сбор `x-*` в `extensions` — оба уже есть в
legacy `json-schema/transformers.ts` и переносятся как функции-хуки правил (единственное разрешённое
исключение из запрета на свободные функции).

### 7.3 Node value и meta

Value — типизированный allow-list по типу схемы (как `jsonSchemaNodeValueProps`), meta — структурные факты:
`deprecated`, `readOnly`, `writeOnly`, `required`, `externalDocs`, `brokenRef`, плюс `_fragment` как escape
hatch (аналог JSO-meta).

Сюда же уезжают вычисления, которые сейчас живут в React:

| Что | Откуда забираем |
| --- | --- |
| Композиция метки типа (type + format + nullable + комбинатор + brokenRef) | `common/NodeType.tsx` |
| Композиция диапазонов значений | `internal/validations/useValueRangeValidation.ts` |
| Отбор валидационных ключей по типу | `internal/validations/useValidations.ts` |
| Разница Draft 04 / Draft 07 (`exclusiveMinimum` / `exclusiveMaximum`) | там же |

### 7.4 Комбинаторы

Complex-узел + `nestedNodes()`. `value(nestedNodeId)` и `childrenNodes(nestedNodeId)` у `ComplexTreeNode` уже
делегируют выбранной ветке — ровно та семантика, что нужна селектору. Правило `complex: true` ставится на
узле-владельце комбинатора, ветки становятся nested-узлами (механика — в `createNodesHook`).

### 7.5 Циклы

После починки пробела 2 (раздел 5.3): `isCycle` на узле, продуктовое правило «не раскрывать» — в
`node-visibility-data`, иконка circular-ref — в subheader `TitleRow`. Порядок хуков (цикл-guard первым) менять
не нужно.

### 7.6 Ленивость

По дизайну из раздела 5.2: очередь отложенных участков во владении билдера, цепочка предков из дерева,
`hasOwnChildren` на простых узлах, раскрываемость комплексного узла — делегированием по цепочке выбора.
Механизм должен жить в **абстрактном** слое, а не в `json-schema`, — им затем смогут воспользоваться остальные
спеки.

## 8. Diffs-слой

Отдельная возможность diffs-режима — скрытие непрерывных фрагментов без изменений под кнопку `show unchanged`.
Она опирается на те же сводки и вынесена в приложение B.

### 8.1 Агрегаторы

Пять семейств, разбиение по kind'ам по образцу `async-api`:

| Семейство | Ожидаемые kind-файлы |
| --- | --- |
| `node-diffs` | `kind-any` (наследование node-level diff'а, поля value), `kind-property` (переименование, `required`), `kind-combiner` (общий для `oneOf`/`anyOf`/`allOf`), `kind-items` |
| `node-descendant-diffs` | `kind-any`, `kind-combiner` (diff'ы по nested-ветвям) |
| `node-diffs-summary` | `kind-any` |
| `node-descendant-diffs-summary` | `kind-any` (только add/remove — контракт уже зафиксирован) |
| `node-diffs-severities` | `kind-any` + переопределения там, где строки специфичны |

### 8.2 Специфика JSON Schema, которой нет у других спеков

1. **Наследование node-level diff'а через комбинатор.** Legacy `getNodeChange` смотрит сначала на
   `$nodeChange` родителя/контейнера, затем в `$childrenChanges` / `$nestedChanges`. В новом стеке контракт
   parent-first уже описан для JSO (`nodeDiffs[""]`, `inherited`), но для комбинаторов путь идёт через
   `container`, а не `parent` — это надо явно покрыть тестами.
2. **`required` — meta-флаг родителя, отображаемый на ребёнке.** В legacy это `$metaChanges.required`.
   В новом стеке это ближе всего к DDL-контракту flag-badge (`aggregateFlagDiff` с нормализацией boolean
   `DiffReplace` → add/remove), потому что `DiffBadge` в side-by-side возвращает `null` на `replace`.
   Переиспользовать идею, но не код DDL.
3. **Композитные строки валидаций.** Диапазон значений собирается из нескольких ключей, значит нужен
   синтетический diff строки — аналог `getRowChanges` из `AdditionalInfoObjectRow`, но в агрегаторе. Отдельно:
   контракт «строка красится `*RowColorizingDiff`, чип красится своим diff'ом» уже отработан на DDL для
   `Default` и `Values` — переносится концептуально.
4. **Списочные значения.** `enum` / `examples` — это `resolveListSideItems` +
   `buildCommaSeparatedListSideSegments`; для `enum` уместен tight-стиль, как у индексов DDL.
5. **Взаимное встраивание.** `extensions` рендерится JSO-diffs-viewer'ом, а вложенная схема внутри JSO —
   JSON-Schema-diffs-viewer'ом. Нужно решить, кто владеет `diffMetaKeys` на стыке, — сейчас это делает
   `wrapJsonSchemaForDiffsViewer` (переносит diff в synthetic `properties`).

## 9. Node visibility

Работы идут по методичке (`next-data-model-authoring/node-visibility/general-approach.md`): правила видимости
уезжают в data-слой **до** перестройки JSX.

Кандидаты в правила для JSON Schema:

- показывать ли строку описания / причины deprecation (зависит от `DisplayMode`);
- какие валидационные строки существуют для данного типа схемы;
- раскрываем ли узел (глубина, `isCycle`, пустые структуры — legacy авто-раскрывает пустые объекты/массивы,
  но не циклы);
- какая строка является терминальной в блоке (аналог `data-ddl-list-last-row`);
- видимость subheader'а на стороне в side-by-side.

Kind-менеджеры: минимум `kind-property` и `kind-combiner`; фабрика — только если понадобится диспетчер на три
и более kind'а (по конвенции).

## 10. Вьюшный слой

### 10.1 Композиция

```text
JsonSchemaNextViewer / JsonSchemaNextDiffsViewer     (билдер, контексты, корневой узел)
  └── SchemaNodeViewer / SchemaNodeViewerWithDiffs   (рекурсия по childrenNodes)
        ├── TitleRow           — имя, метка типа, флаги, circular-ref, expander
        ├── TextRow (markdown) — описание, причина deprecation
        ├── AdditionalInfoRow  — валидации (скаляры и списки)
        ├── JsoViewer/JsoDiffsViewer — x-* расширения (через точку встраивания)
        └── CombinerNodeViewer / ...WithDiffs        (Selector + поддерево выбранной ветки)
```

Именование файлов — по основному экспортируемому компоненту (PascalCase), как требует конвенция.

### 10.2 Что обобщить в `shared-components`

1. `AdditionalInfoRow` + `AdditionalInfoPiece` — перенести, заменив DDL-хардкод на `usage`-энум (по образцу
   `TitleRowUsage` / `TextRowUsage`); `WithDdlListLastRowProps` сделать необязательным расширением.
2. `Selector` — перенести и параметризовать типом узла; отдельно решить вопрос синхронизации выбора ветки
   между сторонами (см. 5.5).
3. Списочные примитивы (`resolveListSideItems`, `buildCommaSeparatedListSideSegments`,
   `DdlCommaSeparatedListWithDiffs`) — вынести из DDL-ветки в общую.
4. `TextRow` — markdown-вариант со «Show more».

Все четыре пункта полезны сами по себе и не зависят от JSON Schema.

### 10.3 Состояние раскрытия и выбора: `api-state-model` не переносится

**Важно: от механизма `api-state-model` нужно отказаться полностью.** Это не «пока не портировали» — этот слой
противоречит природе React, и воспроизводить его в новом стеке нельзя ни в каком виде.

Почему:

- **Это второе, мутабельное дерево состояния параллельно дереву компонентов.** `_expanded`, `_selected`,
  `_children` живут в полях классов, а изменения применяются мутацией с полной перестройкой списка:
  `setSelected` → `this._children = [...buildCombinaryNodes(), ...buildChildrenNodes()]`. Идентичность всех
  дочерних элементов меняется при любом переключении ветки, что обнуляет и мемоизацию, и реконсиляцию.
- **React не может наблюдать эти мутации.** Подписки нет, `useSyncExternalStore` нет; перерисовка происходит
  лишь потому, что рядом дёргается какой-то `useState`. Для мутабельного внешнего стора без подписки
  concurrent-рендеринг означает риск tearing.
- **Производные значения кэшируются в полях без инвалидации** (`$nestedChangesSummaryValue` в
  `JsonSchemaStateCombinaryNode`) — устаревают по построению.
- **Геттеры имеют побочные эффекты и мутируют модель.** `buildChildrenNodes` вызывает
  `this.node.expand().children(this.selected)`, `isExpandableTreeNode` — то же самое внутри предиката. Это
  мутация модели во время рендера.
- **Два источника истины для раскрытия** — модельный `_children` (обнуляемый `collapse()`) и состояние
  `_expanded`. Отсюда же расхождения идентичности узлов (раздел 5.2, дефект 4).
- **Слой уплощает дерево в линейный список** state-узлов (`basic` / `expandable` / `combinary`), то есть
  вручную выражает то, что композиция JSX выражает напрямую.

Целевая схема: модель иммутабельна и только растёт; **ручное** раскрытие и выбор ветки — **только**
состояние React (локальный `useState` на узле в `SchemaNodeViewer`, либо один `useReducer` / контекст с
ключом по `id` узла, если состояние надо разделять между сторонами side-by-side или сохранять). Между ними
нет промежуточного слоя и **нет** `api-state-model` / `JsonSchemaState*`.

JSON Schema приносит три вида такого состояния: **раскрытие по caret** (с начальным значением из
`expandedDepth` + `level`), выбранная ветка комбинатора (с синхронизацией между сторонами) и сортировка
свойств (`onToggleSort` в legacy `HeaderRow`). Вычисление *начального* раскрытия (`level < expandedDepth`,
жёсткий стоп на `isCycle`, предикат раскрываемости через `hasOwnChildren` / отложенный фрагмент) —
`node-visibility-data`, а не JSX. По клику на caret viewer вызывает `materializeChildren` (если дети ещё не
материализованы) и переключает локальный `expanded`. По сортировке — подтвердить у продукта, нужна ли она
вообще.

## 11. План работ

### Фаза 0. Абстрактный слой (без этого дальше нельзя)

1. Ленивая материализация по дизайну раздела 5.2 в `building-service/abstract/tree/builder.ts` + хуках:
   очередь отложенных участков у билдера, цепочка предков из дерева (плюс `exitHook` вместо копирования `Map`
   в полном обходе), `hasOwnChildren` рядом с `CrawlRules`, делегирование раскрываемости по цепочке
   комбинаторов, монотонная материализация без разрушающего `collapse()`.
2. Переход сводок diffs на чтение вниз из `aggregatedDiffsMetaKey` вместо всплытия
   (`addDiffsSummary` / `addDescendantDiffsSummary`) — без этого ленивость и diffs несовместимы, и, независимо
   от ленивости, некорректен предикат режима «только изменения» (приложение B).
3. Починка цикл-клонов: общая ссылка на детей вместо снапшота либо явное правило «клон без детей»;
   назначение diff-метаданных клону (или явное решение, что клон их не имеет, с обоснованием).
4. Unit-тесты на циклы в `packages/next-data-model/tests/` — на существующих спеках, до JSON Schema. Плюс
   инвариант `hasOwnChildren === childrenNodes().length > 0` на полностью материализованных фикстурах.
5. Замер: построить дерево на реальной крупной OpenAPI-схеме с массовым переиспользованием `$ref`, зафиксировать
   время и память до/после ленивости. По результату — решение по structural sharing (раздел 5.2).

### Фаза 1. Обобщение примитивов view-слоя

Пункты 1–4 раздела 10.2. Делается независимо от JSON Schema и сразу снижает связанность DDL и AsyncAPI.
Скриншотные IT существующих сьютов — регрессионная сеть.

### Фаза 2. `json-schema` plain sub-layer + plain viewer

1. `shared/json-schema/types/` — типы параметров билдера, guard'ы.
2. `model/json-schema/types/node-kind.ts`, `tree/node-value.ts`, `tree/node-meta.ts`.
3. `building-service/json-schema/json-crawl-entities/` — правила и трансформеры (перенос из legacy).
4. `building-service/json-schema/tree/` — билдер, building-hooks, node-data builder.
5. Резолверы, вынутые из React: метка типа, диапазоны значений, отбор валидаций.
6. `node-visibility-data` (plain) — `kind-property`, `kind-combiner`; начальное раскрытие по
   `expandedDepth` + `level`.
7. `SchemaNodeViewer`, `CombinerNodeViewer`, корневой `JsonSchemaNextViewer` — **ручное раскрытие по
   caret на каждом узле** (`TitleRow` + локальный React state в `SchemaNodeViewer`; при раскрытии —
   `materializeChildren` через контекст корневого viewer'а). **`api-state-model` не используется и не
   переносится** (раздел 10.3).
8. Unit-тесты модели; stories и скриншотные IT на sample-схемах, включая циклические.

### Фаза 3. `json-schema` with-diffs sub-layer + diffs viewer

1. `DdlApi`-подобный spec-трансформер с diff-метаданными и `aggregateDiffsWithRollup` внутри
   (перестаёт быть обязанностью потребителя).
2. `tree-with-diffs/` билдер + пять семейств агрегаторов (раздел 8.1).
3. `node-visibility-data` (with-diffs) — diff-aware правила, diff-free делегируются plain-менеджерам.
4. Side-display резолверы: метка типа, списки значений, композитные строки валидаций.
5. Фильтрация по severity (`filters`) — довести `DiffFloatingBadgeWrapper`.
6. `SchemaNodeViewerWithDiffs`, `CombinerNodeViewerWithDiffs`, `JsonSchemaNextDiffsViewer`.
7. Режим «только изменения» (`show unchanged`) — приложение B: `ChangesFilter`, `hasAnyChanges`,
   `resolveUnchangedBlocks`, `ShowUnchangedRow`, авто-раскрытие по путям к изменениям.
8. Unit-тесты агрегаторов; diffs-sample-кейсы и скриншотные IT, включая кейсы «изменилась часть properties»
   и «изменений нет вообще».

### Фаза 4. Точка встраивания и миграция внутренних потребителей

1. Контракт встраивания (раздел 6.3) — реестр или props-инъекция.
2. Перевод `MessageContentNodeViewer`, `MessageChannelParametersNodeViewer` и JSO-viewer'ов на новый компонент.
3. Замена `internal/extensions/Extensions.tsx` на прямое использование JSO через тот же контракт.

### Фаза 5. Миграция внешних потребителей

`apispec-view` (`diff-elements-core` Body / Parameters / Responses, `elements-core` Model / Body) и
`qubership-apihub-ui`. Стратегия: новые экспорты рядом со старыми, переключение по флагу, удаление legacy
отдельным шагом. `mergeMirrorSymbolsForDiffMeta` в `Parameters.tsx` — отдельная точка внимания.

### Фаза 6. Удаление legacy

`components/JsonSchemaViewer/`, JSON-Schema-часть `components/common/`, `api-data-model/src/json-schema`,
`api-state-model` (если GraphQL-viewer'ы к тому моменту тоже переведены — иначе только JSON-Schema-часть).

### Порядок и относительный объём

| Шаг | Содержание | Объём |
| --- | --- | --- |
| 1 | Фаза 0, п. 1–2 — ленивая материализация и переход сводок diffs на чтение вниз | крупный, риск-несущий |
| 2 | Фаза 0, п. 3–5 — циклы, инварианты, замеры | средний |
| 3 | Фаза 1 — обобщение примитивов | средний |
| 4 | Фаза 2, п. 1–5 — plain-модель | самый крупный шаг в модели |
| 5 | Фаза 2, п. 6–8 — plain-видимость, viewer, тесты | крупный |
| 6 | Фаза 3, п. 1–4 — diffs-модель и агрегаторы | самый крупный шаг целиком |
| 7 | Фаза 3, п. 5–8 — diffs-viewer, фильтры, режим «только изменения», тесты | крупный |
| 8 | Фаза 4 — точка встраивания, внутренние потребители | средний |
| 9 | Фаза 5 — внешние потребители | средний, растянут по репозиториям |
| 10 | Фаза 6 — удаление legacy | малый, но только после 9 |

## 12. Сложность по областям: doc viewer против doc with diffs viewer

| Область | `doc viewer` | `doc with diffs viewer` | Комментарий |
| --- | --- | --- | --- |
| Kinds и crawl rules | низкая | низкая | Правила общие, переносятся из legacy |
| Node value / meta | средняя | средняя | Перенос вычислений из React — основной объём |
| Комбинаторы | средняя | **высокая** | Наследование diff'а через `container`, разные наборы ветвей до/после, синхронизация выбора между сторонами |
| Циклы | **высокая** | **высокая** | Общая для обоих режимов, решается в Фазе 0; в diffs добавляется вопрос diff'ов на клоне |
| Ленивость / глубина | **высокая** | **высокая** | Общая, Фаза 0 |
| Валидационные строки | средняя | **высокая** | Композитные строки требуют синтетических diff'ов; split «строка / чип» |
| Метка типа | средняя | высокая | Сегментированный side-display, замена 520 LOC `NodeType` |
| Описание / deprecation | низкая | средняя | Markdown + side-aware значение |
| Флаги (`required`, `deprecated`, …) | низкая | средняя | Нормализация boolean `DiffReplace` под `DiffBadge` |
| Расширения `x-*` | низкая | низкая | Уже на новом стеке |
| Видимость строк | средняя | средняя | Методичка и референс на DDL есть |
| Фильтры по severity | — | средняя | Нужно довести `DiffFloatingBadgeWrapper` |
| Тесты и sample-кейсы | средняя | высокая | Diffs-сьют кратно больше |

## 13. Риски и ловушки

| Риск | Проявление | Как снять |
| --- | --- | --- |
| Взрыв дерева на переиспользуемых `$ref` | Деградация или зависание на реальных OpenAPI; цикл-guard **не** спасает — он путевой | Замер до начала работ (Фаза 0, п. 5); ленивость, затем при необходимости structural sharing |
| Расхождение `hasOwnChildren` с фактическими детьми | Раскрывашка, раскрывающаяся в пустоту, или отсутствие раскрывашки у узла с детьми | Предикат выводится из тех же `CrawlRules`, одной функцией; инвариант-тест на материализованных фикстурах |
| Попытка воспроизвести `api-state-model` | Мутации модели в рендере, сорванная мемоизация, устаревшие кэши, tearing | Раскрытие и выбор — только React-состояние; начальное состояние — из `node-visibility-data` |
| Неполная `descendantDiffsSummary` в режиме «только изменения» | Узел с изменениями глубоко внизу ошибочно скрыт под `show unchanged` | Чтение вниз из `aggregatedDiffsMetaKey` (Фаза 0, п. 2) и назначение diff'ов цикл-клонам — предпосылки, а не оптимизации |
| Скрытый блок в конце списка ломает `isLastInList` | Разрыв вертикальной линии и неверные отступы у последней видимой строки | `isLastInList` и `precededBy` считаются по видимой последовательности с плейсхолдером (приложение B, B.6) |
| Неограниченная рекурсия React на цикличном узле | Stack overflow при раскрытии | `isCycle` как жёсткий стоп в правилах видимости; тест на циклической схеме в скриншотном сьюте |
| Неполные дети цикл-клона | Пустой или обрезанный узел вместо ожидаемого содержимого | Починка `createCycledClone` (общая ссылка) или явное продуктовое правило «клон нераскрываем» |
| Потеря diff'ов на цикл-клоне | Изменённый цикличный узел выглядит неизменённым | Назначать diff-метаданные клону; unit-тест |
| Циклическая зависимость модулей JSO ↔ JSON Schema | Сборка ломается или даёт `undefined` при импорте | Контракт встраивания (раздел 6.3) вместо прямых импортов |
| Разные наборы ветвей комбинатора до/после | Селектор в side-by-side не знает, что показать на «пустой» стороне | Продуктовое решение до реализации; в legacy это `onGlobalSelectNestedNode` + `NoSubHeaderContext` |
| Ползучая правка legacy-viewer'ов | Конвенция запрещает менять `JsonSchemaViewer` без согласования | Новые компоненты рядом; legacy не трогаем до Фазы 6 |
| Регрессии у внешних потребителей | 4 репозитория, ~10 точек вызова, разные наборы props | Экспорт рядом со старым, переключение по флагу, поэтапно |
| Расхождение правил подсветки с DDL | «Исправление» подсветки имени свойства по DDL-правилу сломает продуктовое поведение JSON Schema | Отдельная `DiffHiglightingApplicationArea`; подтвердить правила у продукта |
| Скрытая связность `components/common` | Файлы делятся с GraphQL-viewer'ами; удаление сломает их | На Фазе 6 удалять только JSON-Schema-часть |

## 14. Что стоит сделать независимо

Эти шаги полезны сами по себе и снижают стоимость последующей миграции:

1. **Фаза 1 целиком** — вынос `AdditionalInfoRow`, `Selector` и списочных примитивов в общий слой. Сразу
   убирает связность «AsyncAPI знает про DDL-строку» и наоборот.
2. **Unit-тесты на циклы** в `next-data-model` — сейчас это непокрытая ветка кода в абстрактном слое.
3. **Замер стоимости построения дерева** на крупных схемах — даст фактическую базу для решения по ленивости, а
   заодно покажет, есть ли проблема уже сегодня у AsyncAPI-payload'ов, которые рендерит legacy.
4. **Инвентаризация фактического покрытия** JSON-Schema-полей (аналог `ddlapi-display-coverage.md`) — фиксирует
   baseline и превращает «а это баг или так и было?» в проверяемый вопрос.

## 15. Допущения и открытые вопросы

Требуют ответа до начала Фазы 2:

1. **Structural sharing**: включаем разделение поддеревьев для повторно используемых схем (раздел 5.2) или
   ограничиваемся ленивостью? Ответ — по результатам замера (Фаза 0, п. 5). Сам подход к ленивости уже
   зафиксирован в 5.2 и решения не требует.
2. **Циклы**: цикличный узел остаётся нераскрываемым (как в legacy) или раскрывается вручную?
3. **Диффы на цикл-клоне**: показываем изменения или трактуем клон как чистую ссылку?
4. **Комбинаторы в side-by-side**: поведение при разных наборах ветвей до и после; нужна ли синхронизация
   выбранной ветки между сторонами.
5. **Подсветка переименования** свойства: сохраняем legacy-поведение или применяем DDL-правило «имена не
   подсвечиваем»?
6. **Сортировка свойств** (`onToggleSort`): переносим или отказываемся?
7. **`topLevelPropsMediaTypes`** и **`overriddenKind='parameters'`**: часть контракта нового компонента или
   их можно выразить иначе?
8. **Стратегия выката**: новые экспорты рядом с legacy под флагом или единовременная замена?
9. **Режим «только изменения»** (приложение B): прячутся ли собственные follow-on строки видимого узла;
   нужен ли счётчик скрытых узлов на кнопке. Остальное по этому режиму решено — см. B.4.

Допущения, принятые в документе:

- Входной документ всегда прошёл `normalize` + `denormalize` c `liftCombiners: true`; сырые `$ref`-документы не
  поддерживаются, как и сейчас.
- Продуктовое поведение legacy-viewer'а — целевое; расхождения считаются регрессиями, если продукт не сказал
  иначе.
- GraphQL-viewer'ы остаются на legacy-стеке; JSON Schema мигрирует независимо от них.

## Приложение A. Ленивая материализация: примеры по принципам и сквозной прогон

Раскрытие дизайна из раздела 5.2 на конкретном коде и данных. Сигнатуры соответствуют текущему абстрактному
слою (`createTreeBuildingHooks`, `CommonState`, `JsoTreeBuilder` как образец билдера).

Сразу о главном возможном недопонимании: **cycle guard не убирается**. `preventInfiniteLoopHook` остаётся и
продолжает обнаруживать повтор значения на текущем пути и создавать цикл-клон. Меняется только то, **где живёт
множество предков**.

| Что | Сейчас | Предлагается |
| --- | --- | --- |
| Множество предков (для цикла) | `state.alreadyConvertedValuesCache`, копия `new Map(...)` на каждом узле | один экземпляр на обход, `enter` / `leave` через `exitHook`; при доматериализации — собирается подъёмом по дереву |
| Отложенное построение | нет (в legacy — замыкание `_expandingCallback` на каждом узле) | плоская запись `{ nodeId, fragment, path, rules }` в `Map` у билдера |
| Сырой фрагмент узла | нигде (в legacy — только внутри замыкания) | side-таблица `fragments: Map<NodeId, object>` у билдера |
| Раскрываемость | `node.expand().children()`, то есть построением | `hasOwnChildren` на простых узлах + делегирование по цепочке комбинеров |
| Сводки diffs | всплывают от детей к родителям | читаются вниз из `aggregatedDiffsMetaKey` |

### A.1 Принцип 1: отложенная работа — данные у билдера

```ts
type PendingSubtree<R> = {
  nodeId: NodeId
  fragment: object
  path: JsonPath   // абсолютный путь узла в документе
  rules: R         // правила, действовавшие на этом узле
}

class JsonSchemaTreeBuilder extends TreeBuilder</* ... */> {
  private readonly fragments = new Map<NodeId, object>()
  private readonly pending = new Map<NodeId, PendingSubtree<JsonSchemaCrawlRule>>()
  private hooks!: SyncCrawlHook<JsonSchemaTreeCrawlState, JsonSchemaCrawlRule>[]
}
```

Хуки создаются **один раз** в `build()` (в `JsoTreeBuilder.build()` это уже так), и `materializeChildren`
переиспользует тот же массив. В legacy `crawlHooksJsonSchemaTree(tree, value)` вызывался на каждый узел: на
схеме с 20 000 узлов это 20 000 массивов по три замыкания.

### A.2 Принцип 2: предки через `exitHook`, при доматериализации — из дерева

```ts
export class AncestorsRegistry<N> {
  private readonly byValue = new Map<unknown, N>()

  get(value: unknown): N | undefined { return this.byValue.get(value) }
  enter(value: unknown, node: N): void { this.byValue.set(value, node) }
  leave(value: unknown): void { this.byValue.delete(value) }
}

export interface CommonState<V, K, M, N> {
  parent: N | null
  container: N | null
  ancestors: AncestorsRegistry<N>   // вместо alreadyConvertedValuesCache
  depth: number
  pathPrefix: JsonPath
}
```

Правка в `createNodesHook` — три строки:

```ts
// было
const newCache = new Map(state.alreadyConvertedValuesCache)
if (isObject(value) || isArray(value)) { newCache.set(value, treeNode) }
return { value: nextCrawlValue, state: newState }

// стало
if (isObject(value) || isArray(value)) { state.ancestors.enter(value, treeNode) }
return {
  value: nextCrawlValue,
  state: newState,
  exitHook: () => state.ancestors.leave(value),
}
```

`syncCrawl` обходит в глубину и вызывает `exitHook` при снятии узла со стека, поэтому в любой момент реестр
содержит ровно значения текущего пути. Трасса на документе, где `child.self` ссылается обратно на корень:

```yaml
A:                    # объект A
  properties:
    child:            # объект B
      properties:
        self: *A      # разрешённая ссылка обратно на A
    other:            # объект C
      properties: {}
```

| Шаг | Действие | Содержимое реестра |
| --- | --- | --- |
| 1 | входим в `A` | `{A}` |
| 2 | входим в `A.properties.child` = `B` | `{A, B}` |
| 3 | входим в `B.properties.self` = `A` | guard: `get(A)` попадает → цикл-клон, `{ done: true }` |
| 4 | выходим из `B` (`exitHook`) | `{A}` |
| 5 | входим в `A.properties.other` = `C` | `{A, C}` — `B` уже удалён, ровно как при копировании |
| 6 | выходим из `C`, затем из `A` | `{}` |

Ключевой шаг — пятый: при копировании `Map` узел `C` получал бы свою копию без `B`; здесь `B` уже удалён из
общего реестра. Результат идентичен, память — O(глубины) вместо O(узлов × глубины).

При доматериализации реестр восстанавливается из дерева, так как все предки узла к этому моменту построены:

```ts
private collectAncestors(node: ITreeNode<V, K, M>): AncestorsRegistry<ITreeNode<V, K, M>> {
  const registry = new AncestorsRegistry<ITreeNode<V, K, M>>()
  const chain: ITreeNode<V, K, M>[] = []
  for (let current: ITreeNode<V, K, M> | null = node; current; current = current.container ?? current.parent) {
    chain.push(current)
  }
  // от корня вниз — чтобы приоритет совпадал с прямым обходом
  for (const ancestor of chain.reverse()) {
    const fragment = this.fragments.get(ancestor.id)
    if (fragment) { registry.enter(fragment, ancestor) }
  }
  return registry
}
```

Подъём идёт по `container ?? parent`: у ветки комбинатора `container` — это комплексный узел, а `parent` —
ближайший простой предок (см. `createStateForComplexNode` в `JsoTreeBuilder`).

### A.3 Принцип 3: раскрываемость

```ts
export const CHILD_BEARING_KEYS = [
  'properties', 'items', 'additionalProperties', 'additionalItems', 'patternProperties',
] as const

export function hasOwnChildren(fragment: unknown): boolean {
  if (!isObject(fragment)) { return false }
  for (const key of CHILD_BEARING_KEYS) {
    const candidate = fragment[key]
    if (candidate === undefined || candidate === null) { continue }
    if (key === 'properties' || key === 'patternProperties') {
      if (isObject(candidate) && Object.keys(candidate).length > 0) { return true }
      continue
    }
    if (Array.isArray(candidate)) {        // items как tuple
      if (candidate.length > 0) { return true }
      continue
    }
    if (isObject(candidate)) { return true }
  }
  return false
}
```

`allOf` / `oneOf` / `anyOf` в список не входят: они дают не детей, а nested-ветки.

| Фрагмент | `hasOwnChildren` | Что создаст обход |
| --- | --- | --- |
| `{ type: string }` | `false` | ничего — совпадает |
| `{ type: object }` без `properties` | `false` | ничего — совпадает |
| `{ type: object, properties: {} }` | `false` | ничего — совпадает |
| `{ type: array, items: { type: boolean } }` | `true` | узел `items` — совпадает |
| `{ type: array, items: [{...}, {...}] }` | `true` | два узла `item` — совпадает |
| `{ additionalProperties: {} }` (после `unify` из `true`) | `true` | узел `additionalProperties` — совпадает |

Последняя строка — случай, ради которого нужен инвариантный тест: `additionalProperties: true` нормализуется в
`{}`, и обход действительно создаёт узел. Требование «непустой объект» здесь дало бы узел с детьми без
раскрывашки.

Для комплексного узла флага нет, ответ делегируется по цепочке выбора:

```ts
function expandable(node: ITreeNode<V, K, M>, selection: ReadonlyMap<NodeId, NodeId>): boolean {
  let current = node
  while (isComplexNode(current)) {
    const branch = current.findNestedNode(selection.get(current.id)) ?? current.nestedNodes()[0]
    if (!branch) { return false }
    current = branch
  }
  return current.meta().hasOwnChildren === true
}
```

На примере вложенных комбинеров из раздела 5.2:

| Выбор на уровне 1 | Выбор на уровне 2 | Спуск | Результат |
| --- | --- | --- | --- |
| ветка 1.1 (вложенный `oneOf`) | 2.1 (`type: string`) | `first` → 1.1 → 2.1 | `false` |
| ветка 1.1 | 2.2 (`properties.second`) | `first` → 1.1 → 2.2 | `true` |
| ветка 1.2 (`type: array`) | — | `first` → 1.2 | `true` |

Цикл завершается на первом простом узле, каждый шаг — чтение уже построенного nested-узла, ни одного обращения
к детям.

### A.4 Принцип 4: монотонная материализация

```ts
public materializeChildren(node: ITreeNode<V, K, M>, depth = 1): void {
  const work = this.pending.get(node.id)
  if (!work) { return }              // либо уже материализован, либо граница здесь не проходила
  this.pending.delete(work.nodeId)   // идемпотентность: повторный вызов — no-op

  syncCrawl<JsonSchemaTreeCrawlState, JsonSchemaCrawlRule>(
    work.fragment,
    this.hooks,
    {
      state: {
        parent: node,
        container: null,
        ancestors: this.collectAncestors(node),
        depth: 0,
        materializeDepth: depth,
        pathPrefix: work.path,
      },
      rules: work.rules,
    },
    true, // skip root level: сам узел уже создан
  )
}
```

Разрушающего `collapse()` нет. Свёрнутость — состояние React; модель не откатывается, поэтому `tree.nodes`
никогда не содержит двух объектов на один `id` и ссылки не устаревают.

### A.5 Принцип 5: один вывод `id`

`syncCrawl` всегда начинает `path` с `[]`, поэтому при возобновлении пути относительные. Решение — не второй
способ вывода, а один общий с префиксом, пустым в полном обходе:

```ts
function buildNodeId(pathPrefix: JsonPath, path: JsonPath): NodeId {
  return '#' + buildPointer([...pathPrefix, ...path])
}

// createNodesHook, единственное место вывода id
const nodeId = buildNodeId(state.pathPrefix, path)
```

В полном обходе `pathPrefix = []`, и выражение сводится к текущему `'#' + buildPointer(path)`.

### A.6 Принцип 6: граница останова только на простых узлах

Глубина растёт лишь на узлах, дающих новый уровень данных, — так `materializeDepth` совпадает по смыслу с
публичным `expandedDepth` и с геттером `depth` в модели (`parent.depth + (newDataLevel ? 1 : 0)`):

```ts
// в createNodesHook, после создания узла
const nextDepth = state.depth + (nodeParams.newDataLevel ? 1 : 0)

if (isSimpleNode(treeNode) && nextDepth >= state.materializeDepth && hasOwnChildren(value)) {
  this.fragments.set(nodeId, value)
  this.pending.set(nodeId, { nodeId, fragment: value, path: [...state.pathPrefix, ...path], rules })
  return { done: true }
}
```

Комплексный узел под условие не попадает, поэтому цепочка комбинеров материализуется целиком в пределах одного
уровня данных: у комплексных узлов и их веток `newDataLevel: false`, глубина не растёт, и обход доходит до
простых узлов на концах цепочки. Это нужно и селектору (подписи ветвей), и предикату из A.3.

### A.7 Сквозной прогон

```yaml
type: object                        # корень
properties:
  id:
    type: string
  owner:                            # объект O
    type: object
    properties:
      name: { type: string }
      address:                      # объект D
        type: object
        properties:
          city: { type: string }
          resident: *O              # ссылка обратно на owner → цикл
  tags:
    oneOf:
      - type: array
        items: { type: string }
      - type: object
        properties:
          primary: { type: string }
```

**Шаг 1: `build({ materializeDepth: 2 })`.** Один `syncCrawl`, один экземпляр `AncestorsRegistry`.

| Узел | `id` | Глубина | Что происходит |
| --- | --- | --- | --- |
| корень | `#` | 0 | `ancestors.enter(root)` |
| `id` | `#/properties/id` | 1 | простой, `hasOwnChildren = false` — раскрывашки не будет |
| `owner` | `#/properties/owner` | 1 | `hasOwnChildren = true`, глубина < 2 — идём внутрь, `ancestors.enter(O)` |
| `name` | `#/properties/owner/properties/name` | 2 | лист |
| `address` | `#/properties/owner/properties/address` | 2 | `hasOwnChildren = true`, глубина = 2 → **в `pending`**, `{ done: true }` |
| `tags` | `#/properties/tags` | 1 | комплексный, `newDataLevel: false` — глубина не растёт |
| ветка `oneOf[0]` | `#/properties/tags/oneOf/0` | 1 | простая ветка, `hasOwnChildren = true` (есть `items`) → строим `items` |
| ветка `oneOf[1]` | `#/properties/tags/oneOf/1` | 1 | простая ветка, `hasOwnChildren = true` → строим `primary` |

После `build()`: `pending = { '#/properties/owner/properties/address' }`, `ancestors` пуст (все `exitHook`
отработали), `fragments` содержит фрагмент `address`. Узел `address` получает раскрывашку, потому что
`meta().hasOwnChildren === true`, — и **без** построения детей. В legacy на этом месте `isExpandableTreeNode`
вызвала бы `expand()` и построила бы `city` и `resident` немедленно.

**Шаг 2: пользователь раскрывает `address`** → `materializeChildren(addressNode)`:

1. `collectAncestors` подъёмом по `parent` даёт цепочку `address → owner → root`, разворачивает её и заполняет
   реестр: `{ rootFragment → #, O → #/properties/owner, D → #/properties/owner/properties/address }`.
2. Запускается `syncCrawl(D, hooks, { state }, true)`, где в состоянии `parent: addressNode` и
   `pathPrefix: ['properties', 'owner', 'properties', 'address']`.
3. `city` создаётся с `id = #/properties/owner/properties/address/properties/city` — тот же `id`, который
   получился бы при полном обходе.
4. На `resident` guard делает `ancestors.get(O)` и попадает: цикл-клон с
   `id = #/properties/owner/properties/address/properties/resident`, ветка останавливается. Цикл, начавшийся
   **выше** границы материализации, корректно обнаружен уже после завершения первого обхода — именно потому,
   что цепочка предков восстановлена из дерева, а не хранилась в замыкании.

**Шаг 3: повторное раскрытие после свёртывания.** Свёртывание меняет только состояние React. Повторный
`materializeChildren(addressNode)` находит `pending.get(id) === undefined` и выходит. Объекты узлов и их `id`
те же, `tree.nodes` не менялся.

**Шаг 4: режим diffs.** Пусть `city` переименован в `town`, а узел `address` свёрнут — маркер изменений на нём
показать нужно. Сводка берётся не от детей (их может не быть), а из документа: `aggregateDiffsWithRollup` уже
разложил агрегат по узлам, поэтому агрегатор `node-descendant-diffs-summary` читает
`getValueByPath(fragment, [aggregatedDiffsMetaKey])` того же фрагмента `D` — как это делают существующие
kind-менеджеры AsyncAPI. Всплытие `addDiffsSummary` в этой схеме не участвует и удаляется.

## Приложение B. Режим «только изменения» (`show unchanged`)

Требование: в diffs-режиме непрерывные фрагменты дерева, **абсолютно не содержащие ни прямых, ни дочерних
изменений**, скрываются под одну кнопку `show unchanged`. Пример: объект с десятью properties, изменились
вторая, третья и пятая — на экране узел 1 под кнопкой, узлы 2 и 3 с подсветкой, узел 4 под кнопкой, узел 5 с
подсветкой, узлы 6–10 под **одной** кнопкой. Раскрытый фрагмент остаётся видимым до перезагрузки страницы.

Смежный документ: [async-api-changed-only-rows-analysis.md](./async-api-changed-only-rows-analysis.md) —
источник разделяемых абстракций (`ChangesFilter`, классы строк, предикаты по поддереву).

### B.1 Почему для JSON Schema это дешевле, чем для AsyncAPI

В AsyncAPI понадобились `FlowItemDescriptor` и оркестратор `RowSequence`, потому что поток строк там
разнородный: в одном JSX перемешаны заголовки секций, контентные строки, неделимые legacy-блоки и целые
JSO-поддеревья, и «подряд идущие скрытые единицы» сгруппировать нечем.

В JSON Schema скрываются **узлы**, а узлы уже лежат однородным списком — `childrenNodes()` одного родителя.
Единица скрытия совпадает с элементом существующего списка, поэтому дескрипторы, `RowSequence` и класс
`opaque-block` не нужны: группировка — чистая функция над массивом сиблингов.

### B.2 Предикат: переиспользуется целиком

Формулировка «ни прямых, ни дочерних изменений» отображается на существующие поля один в один:
`diffsSummary` — изменения самого узла, `descendantDiffsSummary` — изменения потомков.

```ts
// model/abstract/tree-with-diffs/subtree-changes.ts — общее для всех спеков
export function takeNodeChangeTypes(node: ITreeNodeWithDiffs<V, K, M, D>): ReadonlySet<DiffType> {
  const types = new Set(node.diffsSummary)
  for (const type of node.descendantDiffsSummary) { types.add(type) }
  return types
}

export function hasAnyChanges(
  node: ITreeNodeWithDiffs<V, K, M, D>,
  diffTypes?: ReadonlySet<DiffType>,
): boolean {
  const types = takeNodeChangeTypes(node)
  if (!diffTypes) { return types.size > 0 }
  for (const type of types) { if (diffTypes.has(type)) { return true } }
  return false
}
```

Это тот же `takeSubtreeChangeTypes` / `hasSubtreeChanges`, что запланирован в AsyncAPI-анализе (Фаза 1, п. 5):
реализуется один раз в абстрактном слое и используется обоими спеками. Параметр `diffTypes` нужен потому, что
при включении фильтра по типам изменений (`DiffTypesContext`, висящий `hidden={false} // TODO`) понятие
«изменение» станет зависеть от отфильтрованного множества, а не от `boolean`.

### B.3 Группировка: `unchangedBlockId` выводится, а не хранится

Идентификатор скрытого блока полем на узле делать не следует: границы блоков зависят от того, что является
**состоянием вида**, а не фактом сборки, — включён ли режим, какой активен фильтр по типам изменений, какая
ветка комбинатора выбрана. Запечённый на build'е `unchangedBlockId` потребовал бы перестройки дерева при каждом
переключении фильтра.

Идентификатор достаточно выводить: это `id` первого узла блока — стабильный, поскольку `id` узлов путевые, и
уникальный в пределах дерева.

```ts
// building-service/abstract/tree-with-diffs/changed-only/resolve-unchanged-blocks.ts
export type UnchangedBlockMembership =
  | { visible: true }
  | { visible: false; unchangedBlockId: NodeId; isBlockStart: boolean; blockSize: number }

export function resolveUnchangedBlocks(
  children: readonly ITreeNodeWithDiffs<V, K, M, D>[],
  filter: ChangesFilter,
): UnchangedBlockMembership[] {
  if (isAllChangesFilter(filter)) {
    return children.map(() => ({ visible: true }))
  }

  const result: UnchangedBlockMembership[] = []
  let index = 0
  while (index < children.length) {
    if (hasAnyChanges(children[index], filter.diffTypes)) {
      result.push({ visible: true })
      index++
      continue
    }
    const blockStart = index
    while (index < children.length && !hasAnyChanges(children[index], filter.diffTypes)) {
      index++
    }
    const unchangedBlockId = children[blockStart].id
    const blockSize = index - blockStart
    for (let position = blockStart; position < index; position++) {
      result.push({ visible: false, unchangedBlockId, isBlockStart: position === blockStart, blockSize })
    }
  }
  return result
}
```

Функция чистая, generic по `ITreeNodeWithDiffs`, покрывается unit-тестами без React и переиспользуется AsyncAPI
для его data-node строк.

**Блоки образуются на минимально возможной глубине, поэтому вложенных кнопок не возникает.** Полностью
неизменившееся поддерево скрывается как один элемент блока своего родителя, а не превращается в собственную
кнопку: до его детей алгоритм не доходит вовсе.

### B.4 Полное отсутствие изменений — одна кнопка на весь корень

Зафиксированное продуктовое решение. Специального ветвления не требуется — свойство вытекает из алгоритма:
если ни у одного ребёнка корня нет изменений, все они попадают в один блок, и рендерится одна кнопка.

Принятая трактовка: кнопка заменяет **содержимое** корня. Собственные строки корневого узла (заголовок,
description, строки валидаций) остаются видимыми, как и у любого видимого узла. Если корневая схема скалярная и
детей нет, скрывать нечего — вьюер показывает единственную строку как обычно.

### B.5 Вьюшный слой: дельта — один `useMemo` и одна ветка

Состояние раскрытых блоков — плоский `Set` в контексте на корне вьюера. Плоский работает именно потому, что
`unchangedBlockId` — это `id` узла, то есть уникален глобально; сливать состояние по родителям не нужно. Так же
автоматически выполняется требование «остаётся видимым до перезагрузки страницы»: `Set` живёт выше
свёртывания родителей, поэтому свернуть и снова раскрыть родителя его не сбрасывает.

```tsx
const memberships = useMemo(
  () => resolveUnchangedBlocks(children, changesFilter),
  [children, changesFilter],
)

return children.map((child, index) => {
  const membership = memberships[index]
  if (membership.visible || expandedBlocks.has(membership.unchangedBlockId)) {
    return <SchemaNodeViewerWithDiffs key={child.id} node={child} {...siblingContext[index]} />
  }
  if (!membership.isBlockStart) { return null }
  return (
    <ShowUnchangedRow
      key={membership.unchangedBlockId}
      unchangedBlockId={membership.unchangedBlockId}
      count={membership.blockSize}
    />
  )
})
```

`ShowUnchangedRow` — обычная строка того же шаблона (`SideBySideLayout` / `OneSideLayout`, без
`DiffFloatingBadgeWrapper` и без diff-бейджа), место ей в `shared-components/`, чтобы AsyncAPI взял её же.
В side-by-side она одна на обе колонки: скрытие всегда по строке целиком, никогда по стороне.

### B.6 Четыре вещи, которые нельзя забыть

1. **Авто-раскрытие по путям к изменениям.** Property, у которой изменился потомок, должна быть не только
   видима, но и раскрыта, иначе пользователь увидит строку и будет доклацывать вниз вручную. Правило: в режиме
   changed-only начальное `expanded = hasAnyChanges(node)`, независимо от `expandedDepth`. Данные те же, новых
   механизмов не нужно. С ленивой материализацией (приложение A) это сочетается хорошо: материализуются только
   ветки, ведущие к изменениям.
2. **`isLastInList` считается по видимой последовательности.** Главная практическая ловушка; урок усвоен на DDL
   (`resolveListLastRowFlags`). Если последний сиблинг попал в скрытый блок, флаг последней строки и
   вертикальная линия `LevelIndicator` должны считаться так, что последним элементом является **плейсхолдер**.
   Поэтому видимую последовательность (видимые узлы + плейсхолдеры блоков) формируем в той же функции, что и
   membership, и уже из неё выводим `isLastInList` и `precededBy` — не в JSX.
3. **Комбинаторы.** Группировка идёт по `childrenNodes(selectedNestedId)`, то есть по детям выбранной ветки;
   `ComplexTreeNode.childrenNodes(nestedId)` делегирует ветке, поэтому функция работает без изменений — но
   зависимость `useMemo` должна включать id выбранной ветки. Строка селектора — section row, всегда видима;
   ветки комбинатора под кнопку не убираются.
4. **Пробелы 1 и 2 становятся жёсткими предпосылками** — по корректности предиката, а не по
   производительности. `descendantDiffsSummary` сейчас всплывает от детей к родителям, значит у не полностью
   построенного поддерева она неполна, и узел с изменениями глубоко внизу будет ошибочно спрятан: переход на
   чтение вниз из `aggregatedDiffsMetaKey` (Фаза 0, п. 2) обязателен именно для этой функциональности. Цикл-
   клонам diff'ы не назначаются вовсе (раздел 5.3), поэтому цикличный узел с изменениями внутри тоже будет
   спрятан.

### B.7 Объём

| Часть | Где | Объём |
| --- | --- | --- |
| `ChangesFilter` + guard'ы | `model/abstract/changes-filter.ts` | малый, общий с AsyncAPI |
| `takeNodeChangeTypes` / `hasAnyChanges` | `model/abstract/tree-with-diffs/subtree-changes.ts` | малый, общий |
| `resolveUnchangedBlocks` + видимая последовательность | `building-service/abstract/tree-with-diffs/changed-only/` | малый, общий, покрывается unit-тестами без React |
| `ShowUnchangedRow` + контекст раскрытых блоков | `components/shared-components/` | малый, общий |
| Вызов группировки, авто-раскрытие, `isLastInList` с плейсхолдером | JSON-Schema-вьюеры | малый — при закрытых предпосылках |

Открытые вопросы по этому режиму: прячутся ли собственные follow-on строки видимого узла (description, строки
валидаций) — рекомендация «нет, скрытие только по узлам»; нужен ли счётчик скрытых узлов на кнопке.
