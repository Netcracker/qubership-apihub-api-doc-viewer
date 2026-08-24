# Скрытие неизменившихся строк в diff-viewers (AsyncAPI) — анализ и план

## 1. Назначение документа

Анализ технической возможности и план реализации функциональности «показывать только строки с изменениями,
остальные прятать под кнопку `Expand unchanged rows`» для `AsyncApiOperationDiffsViewer` и его дочерних
компонентов.

Документ отвечает на три вопроса: что уже готово в data model и во viewers, что мешает, и какой объём работ
требуется. Пиксельные значения, сигнатуры и имена файлов приведены как ориентир — источником истины остаётся код.

Смежные документы: [ddlapi-display-coverage.md](./ddlapi-display-coverage.md),
[jso-diffs-implementation-actions.md](./jso-diffs-implementation-actions.md), методичка node-visibility в
пакете скилла `next-data-model-authoring`.

## 2. Вердикт

| Вопрос | Ответ |
| --- | --- |
| Технически достижимо? | Да, для нового стека (AsyncAPI tree + JSO tree) |
| Готова ли data model? | Примерно на 70%: есть diff'ы по строкам и агрегаты по поддереву; нет понятия «строка» и нет режима фильтрации |
| Готовы ли viewers? | Нет: нужен новый уровень оркестрации списка строк и рефакторинг `data-precededby` |
| Можно ли обойтись правкой только `AsyncApiOperationDiffsViewer`? | Нет: затрагиваются `AsyncApiOperationViewer/*`, `JsoViewer/*`, `shared-components/*` и слой `next-data-model` |
| Покроется ли документ целиком? | Нет: `Payload`, `Headers`, `Address Parameters` рендерит legacy `JsonSchemaDiffViewer` |

Главный блокер — не данные, а вьюшный слой: строки выводятся ad-hoc в JSX каждого viewer'а, нет сущности
«строка» и нет контейнера, способного сгруппировать соседние скрытые строки под одну кнопку. При этом
цепочки `data-precededby`, задающие отступы и непрерывность вертикальных линий, вычисляются вручную из
видимости соседей и сломаются при скрытии строк.

## 3. Зафиксированные продуктовые решения

| Вопрос | Решение | Влияние на архитектуру |
| --- | --- | --- |
| Периметр | Только AsyncAPI diffs viewer и его JSO-поддеревья (bindings, extensions) | DDL и самостоятельный `JsoDiffsViewer` — позже; абстракции проектируем cross-spec, включаем точечно |
| Legacy JSON Schema | Отложить до переезда на новый стек | Нужен временный контракт «неделимого блока» (раздел 9) |
| Секция без изменений внутри | Заголовок остаётся видимым, прячется только содержимое | Предикат «есть ли изменения ниже» не нужен для видимости заголовков — крупное упрощение |
| Кнопка `Expand unchanged rows` | Восстанавливает исходное отображение всего поддерева ниже | Реализуется подменой режима фильтра на `all`; вложенных кнопок внутри раскрытого фрагмента не возникает |
| Селекторы секций и протоколов | Автовыбор первой вкладки с изменениями при входе в режим; все вкладки остаются видимыми | Данные уже есть в опциях селектора |
| `AddressRow` и `ServerAddressRow` | Структурные, всегда видимы | Попадают в класс «заголовочных» строк |

## 4. Что такое «строка» технически

Определение через `LevelIndicator` работает не всегда: компонент возвращает `null` при `level === 0`, поэтому
строки верхнего уровня формально под него не подпадают. Рабочее определение:

> **Строка** — компонент, рендерящий одну горизонтальную полосу через `OneSideLayout` или `SideBySideLayout`,
> как правило обёрнутую в `DiffFloatingBadgeWrapper`.

Под определение попадают `TitleRow`, `TextRow`, `AddressRow`, `ServerAddressRow`, `AdditionalInfoRow` (DDL),
а также строка селектора в `MessageSectionsViewer`, собранная вручную по тому же шаблону.

Практическая ценность: у всех этих компонентов уже есть единая точка перехвата — `DiffFloatingBadgeWrapper`
с зарезервированным `hidden={false} // TODO: Implement diffs severities filters`.

## 5. Инвентаризация строк AsyncAPI-диффа

| Viewer | Строки | Класс | Источник diff'а |
| --- | --- | --- | --- |
| `MessageNodeViewer` | `TitleRow` (h1), `AddressRow`, `TextRow` description, `TextRow` summary | секция / секция / контент / контент | `node.diffs.title/address/description/summary` |
| `MessageSectionsViewer` | строка селектора Message / Channel / Operation | секция | `diffs[""]`, плюс сводки на секциях |
| `MessageChannelNodeViewer` | `TitleRow` (h2), description, summary | секция / контент / контент | `node.diffs.*` |
| `MessageOperationNodeViewer` | то же | то же | то же |
| `MessageChannelServersNodeViewer` → `MessageChannelServerNodeViewer` | `TitleRow` «Servers», элемент сервера, `ServerAddressRow`, description, summary | секция / data-node / секция / контент | `node.diffs.*`, placement `server-address-row` |
| `MessageChannelParametersNodeViewer` | `TitleRow` «Address Parameters» + legacy `JsonSchemaDiffViewer` | секция + чужой стек | `diffs[""]`, далее legacy |
| `ExtensionsNodeViewer` | `TitleRow` «Extensions» + `JsoDiffsViewer` | секция + JSO-дерево | `diffs[""]`, далее JSO |
| `BindingsNodeViewer` | `TitleRow` «Bindings» (селектор протокола в subheader), `TextRow` «Version», `JsoDiffsViewer` | секция / контент / JSO-дерево | `diffs`, placement `binding-version-row` |
| `MessageContentNodeViewer` | `TitleRow` «Headers», `TitleRow` «Payload», два legacy `JsonSchemaDiffViewer` | секции + чужой стек | `diffs[""]` на headers/payload |
| `JsoPropertyNodeViewerWithDiffs` (рекурсивно) | `TitleRow` свойства, значение в subheader (`JsoValueWithDiffs`) | data-node | `diffs[""]`, `descendantDiffsSummary` |

Три ключевых наблюдения:

1. **Три независимых дерева** в одном визуальном документе: AsyncAPI tree → JSO trees (bindings и extensions
   строятся отдельными билдерами из фрагмента) → legacy JSON Schema. Это прямо задокументировано в
   `AsyncApiTreeWithDiffsBuilder.assignNodeDiffs` и в forward-агрегаторах `kind-binding`, `kind-message-content`,
   `kind-channel`, `kind-operation`.
2. **Узел JSO одновременно строка и структура** — правило «структурное всегда видимо» к нему неприменимо
   в лоб (см. раздел 8.1).
3. **`NodeDiffsSeverityPlacemennt`** (`title-row`, `description-row`, `summary-row`, `address-row`,
   `binding-version-row`, `server-address-row`, `additional-info-row`) — де-факто уже существующий перечень
   слотов строк узла. Хорошая основа для формализации.

## 6. Готовность data model

### 6.1 Что есть

| Возможность | Где |
| --- | --- |
| Diff на конкретное свойство строки | `node.diffs[key]`, `NODE_LEVEL_DIFF_KEY` для whole-node |
| Сводка изменений самого узла с обратной пропагацией в `container` / `parent` | `addDiffsSummary` в `SimpleTreeNodeWithDiffs` |
| Сводка изменений потомков с обратной пропагацией | `addDescendantDiffsSummary` там же |
| Прокидывание изменений через границы деревьев | forward-агрегаторы `node-descendant-diffs-summary/kind-binding.ts`, `kind-message-content.ts`, `kind-channel.ts`, `kind-operation.ts` — читают `aggregatedDiffsMetaKey` из merged-документа |
| Привязка diff'а к слоту строки | `node.diffsSeverities[placement]` |
| Готовый паттерн выноса видимости строк в модель | sub-layer node-visibility, Phase 1 сделана для DDL (коммит `1f1e561`) |
| Абстракция режима отображения | `model/abstract/display-mode.ts` |
| Пример «есть ли изменения в неактивной вкладке» | `Selector.resolveOptionDiffPresentation` |

### 6.2 Чего нет

1. **Понятия «строка» в модели.** `NodeDiffsSeverityPlacemennt` описывает только severity, не «какие строки
   узел рендерит и видима ли строка».
2. **Единого места для AsyncAPI-видимости.** Сейчас это `shouldBeDisplayed(...)` в
   `utils/async-api/visibility-checkers.ts` плюс `children.find(isXxxNode)` внутри каждого viewer'а — то есть
   Phase 1 node-visibility для AsyncAPI не сделана.
3. **Режима фильтрации по изменениям.** Нет ни типа, ни guard'ов, аналогичных `DisplayMode`.
4. **Учёта фильтра по типам изменений.** `DiffTypesContext` прокинут, но нигде не применяется. Если фильтр
   заработает, «изменение» должно считаться по отфильтрованному множеству типов, значит предикат должен
   оперировать `Set<DiffType>`, а не `boolean`.

## 7. Готовность viewers

### 7.1 Что есть

- Единый шаблон строки (`DiffFloatingBadgeWrapper` + `SideBySideLayout` / `OneSideLayout` + `*RowContent`) —
  одна точка перехвата.
- Скрытие всегда «по строке целиком», а не по стороне: строка — одна полоса на обе колонки. Отдельная
  side-видимость (`styles.before/after.isContentVisible`) относится к содержимому и не должна с этим смешиваться.
- `hidden` prop у `DiffFloatingBadgeWrapper` уже зарезервирован под фильтрацию.
- Контексты (`LayoutMode`, `DisplayMode`, `DiffMetaKeys`, `DiffTypes`, `Level` / `AsyncLevel`) — готовая шина
  для ещё одного контекста.

### 7.2 Чего нет

1. **Списка строк.** Каждый viewer выводит строки как самостоятельные JSX-элементы вперемешку с блоками.
   Сгруппировать «подряд идущие скрытые» нечем.
2. **Корректного `data-precededby` при скрытии.** Сейчас цепочки вида
   `isDescriptionDisplayed ? DESCRIPTION_ROW : isSummaryDisplayed ? SUMMARY_ROW : MESSAGE_SECTION_HEADER_HIGH_LEVEL`
   пишутся вручную в каждом viewer'е (`MessageChannelNodeViewer` — до четырёх уровней вложенности тернарников).
   Второе измерение видимости даёт комбинаторный взрыв и почти наверняка ломает отступы и вертикальные линии —
   ровно те грабли, что описаны в `ddlapi-indentations-update`.
3. **Изоляции JSO-поддеревьев.** `JsoDiffsViewer` сам ставит провайдеры `DiffMetaKeysContext`,
   `DiffTypesContext`, `DisplayModeContext`, `LayoutModeContext`, то есть перекрывает внешний контекст. Новый
   режим придётся прокидывать явным prop'ом, иначе фильтр не дойдёт до bindings и extensions.
4. **Взаимодействия с `Expander`.** У `JsoPropertyNodeViewerWithDiffs` локальный `expanded`; в режиме «только
   изменения» ветки, ведущие к изменению, должны раскрываться автоматически.

## 8. Модель решения

### 8.1 Три класса строк

Решение «заголовок секции всегда видим» требует развести два класса, которые интуитивно кажутся одним
«структурным»:

| Класс | Примеры | Правило в режиме `changed-only` |
| --- | --- | --- |
| **Section row** — фиксированная строка схемы документа | `TitleRow` «Bindings», «Extensions», «Servers», «Headers», «Payload», «Address Parameters»; title сообщения, канала, операции; строка селектора; `AddressRow`; `ServerAddressRow` | всегда видима |
| **Data node row** — строка, порождённая пользовательскими данными | свойства в `JsoPropertyNodeViewerWithDiffs` (bindings, extensions), элементы списков серверов и bindings | `hasOwnChange \|\| hasSubtreeChanges` |
| **Content row** — терминальная строка-значение | `TextRow` description и summary, `TextRow` «Version», `AdditionalInfoRow` (DDL) | `hasOwnChange` |

Разведение принципиально: в целевом сценарии прятать нужно именно **неизменившиеся свойства**
`message.bindings.kafka`, хотя формально каждое из них — потенциальный контейнер. Если применить к ним правило
«структура всегда видима», режим перестанет работать в самом важном месте.

### 8.2 Предикаты

| Предикат | Смысл | Источник |
| --- | --- | --- |
| `hasOwnChange` | Строка сама показывает diff | `node.diffs[diffKey слота]` либо `diffs[""]` |
| `hasSubtreeChanges` | Ниже по дереву есть изменения | `diffsSummary ∪ descendantDiffsSummary` внутри одного дерева; `aggregatedDiffsMetaKey` на границах JSO- и legacy-поддеревьев |

Благодаря решению «заголовок секции всегда видим» **не требуется** дорогой точный предикат «есть ли ниже хотя
бы одна видимая изменённая строка». `hasSubtreeChanges` нужен только для data-node строк и для legacy-блоков,
а там он считается по уже пропагированным сводкам — то есть без риска ложноположительных срабатываний, который
был главным риском первой редакции анализа.

### 8.3 Фрагмент (run)

**Скрываемый фрагмент** — максимальная непрерывная последовательность соседних скрытых единиц потока внутри
одного контейнера строк, в порядке рендеринга. Один фрагмент — одна кнопка `Expand unchanged rows`.

Ключ фрагмента для сохранения состояния: `${ownerNodeId}:${firstItemKey}`.

Единица потока — не обязательно строка: во фрагмент может попасть целый блок (legacy-viewer, блок сервера,
`JsoDiffsViewer` целиком). Поэтому дескриптор описывает элемент потока:

```tsx
type FlowItemDescriptor = {
  key: string
  kind: 'section-row' | 'data-node-row' | 'content-row' | 'opaque-block'
  changed: boolean
  hasSubtreeChanges: boolean
  rowCount?: number // для счётчика на кнопке; для opaque-block неизвестен
  render: (precededBy: PrecededBy, filter: ChangesFilter) => ReactNode
}
```

Интроспекция `React.Children` как альтернатива дескрипторам отвергнута: хрупко, ломает типизацию и мемоизацию.

### 8.4 Механика кнопки «раскрыть поддерево»

Решение «кнопка восстанавливает исходное отображение всего поддерева» реализуется локальной подменой режима:

```tsx
// внутри UnchangedRowsGroup, когда пользователь раскрыл фрагмент
<ChangesFilterContext.Provider value={CHANGES_FILTER_ALL}>
  {items.map(item => item.render(resolvedPrecededBy, CHANGES_FILTER_ALL))}
</ChangesFilterContext.Provider>
```

Свойства решения:

- вложенные кнопки внутри раскрытого фрагмента не появляются — режим внутри выключен полностью;
- состояние — простой `Set<runKey>` во владельце последовательности, без слияния вложенных состояний;
- контекста **недостаточно** для JSO-поддеревьев, поскольку `JsoDiffsViewer` перекрывает провайдеры: режим
  передаётся и контекстом, и явным prop'ом `changesFilter`, причём prop имеет приоритет.

## 9. Временный контракт для legacy JSON Schema

Пока `Payload`, `Headers` и `Address Parameters` рендерит legacy `JsonSchemaDiffViewer` (стек
`api-data-model`, менять без явного согласования нельзя), блок рассматривается как неделимый:

```text
заголовок секции            → всегда видим (section row)
содержимое (legacy viewer)  → есть изменения внутри → рендерится как сегодня, без фильтрации
                            → изменений нет         → целиком уходит в скрытый фрагмент под кнопку
```

Признак «есть изменения внутри» берётся из `aggregatedDiffsMetaKey` — ровно так, как это уже делают
`AsyncApiNodeDescendantDiffsSummaryAggregatorKindMessageContent` для `headers` и `payload` и
`...KindChannel` для `parameters`. Новых механизмов сбора не требуется.

## 10. План работ

### Фаза 1. next-data-model — слоты строк и видимость

Следуем методичке node-visibility (`general-approach.md`): правила видимости сначала уезжают в data model,
и только затем перестраивается JSX. Пропускать этот шаг нельзя.

1. **Класс и слоты строк.** `model/abstract/tree-with-diffs/row-slot.ts`: тип `RowSlot`, класс строки
   (`section-row` / `data-node-row` / `content-row`), связка слот → `diffKey` → `NodeDiffsSeverityPlacemennt`.
   Не дублировать `NodeDiffsSeverityPlacemennt`, а надстроиться над ним.
2. **Режим фильтра.** `model/abstract/changes-filter.ts`: `CHANGES_FILTER_ALL` / `CHANGES_FILTER_CHANGED_ONLY`
   плюс guard'ы, по образцу `display-mode.ts`.
3. **Plain-видимость AsyncAPI** (перенос текущей логики из viewers):
   - `building-service/async-api/node-visibility-data/types.ts` — `AsyncApiMessageRowVisibility`,
     `AsyncApiChannelRowVisibility`, `AsyncApiOperationRowVisibility`, `AsyncApiServerRowVisibility`,
     `AsyncApiBindingsRowVisibility`;
   - `building-service/async-api/tree/node-visibility-data/kind-message.ts`, `kind-channel.ts`,
     `kind-operation.ts`, `kind-server.ts`, `kind-bindings.ts` — классы-менеджеры с protected-правилами;
     сюда же уезжает `shouldBeDisplayed`.
4. **With-diffs видимость.** `building-service/async-api/tree-with-diffs/node-visibility-data/kind-*.ts` —
   diff-aware `resolveNodeVisibility`; diff-free правила делегируются plain-менеджерам.
5. **Предикат изменений по поддереву.** Аксессоры `model/async-api/tree-with-diffs/subtree-changes.ts`:
   `takeSubtreeChangeTypes(node): Set<DiffType>`, `hasSubtreeChanges(node, filter)`.
6. **Добивка forward-агрегаторов** там, где есть дырки (`extensions` у operation и server, вложенные
   bindings) — иначе data-node строки будут ошибочно скрываться.
7. **Публичные barrel'ы.** `model/async-api/tree/node-visibility/kind-*.ts` и
   `model/async-api/tree-with-diffs/node-visibility/kind-*.ts`.
8. **JSO.** Аналогичный `hasSubtreeChanges` с учётом рекурсии; слот у JSO один — title-row свойства.

### Фаза 2. api-doc-viewer — оркестрация потока строк

1. **Контекст.** `contexts/ChangesFilterContext.tsx` (`mode` и `diffTypes`). Прокидывается из
   `AsyncApiOperationDiffsViewer`; в `JsoDiffsViewer` — дополнительно prop'ом.
2. **Дескрипторы.** Viewers перестают выводить строки напрямую и формируют `FlowItemDescriptor[]`
   (раздел 8.3).
3. **`RowSequence`** — оркестратор: применяет режим фильтра, сам вычисляет `data-precededby` по фактически
   видимой последовательности (это заодно убирает существующие тернарники-простыни) и группирует скрытые
   элементы во фрагменты. Чистая функция группировки `buildRowRuns(descriptors, mode)` выносится отдельно и
   покрывается unit-тестами без React.
4. **`UnchangedRowsGroup`** — плейсхолдер: одна строка того же шаблона (`SideBySideLayout`, без
   `DiffFloatingBadgeWrapper` и без diff-бейджа) с кнопкой и счётчиком скрытых строк; локальный `expanded`;
   при раскрытии рендерит исходные дескрипторы с фильтром `all`. Новое значение
   `PrecededBy.UNCHANGED_ROWS_PLACEHOLDER` и правила в `preceded-by.css`.
5. **JSO-рекурсия.** В `JsoPropertyNodeViewerWithDiffs` видимость узла — по `hasOwnChange || hasSubtreeChanges`;
   дети прогоняются через `RowSequence`; авто-`expanded` для веток с изменениями. При свёрнутом узле
   `UxMarkerPanel` уже показывает `descendantDiffsSummary` — переиспользовать.
6. **Автовыбор вкладок** — см. раздел 11.

### Фаза 3. Тесты и Storybook

- Новые sample-кейсы в `packages/samples/async-api-diffs/`: изменение только в `message.description`;
  изменение в `message.bindings.kafka.<prop>` вместе с `channel.title` и `channel.description`; изменение
  только в неактивной секции; изменение только в payload (legacy); полное отсутствие изменений.
- Stories в `src/stories/async-api-diffs-suite/` с аргументом режима; screenshot ITs
  (`npm run regenerate-screenshots` в `packages/api-doc-viewer`).
- Unit-тесты в `packages/next-data-model/tests/unit-tests/`: `async-api-node-visibility.test.ts`,
  `async-api-subtree-changes.test.ts`; во viewer-пакете — тест `buildRowRuns`.

### Порядок и относительный объём

| Шаг | Содержание | Объём |
| --- | --- | --- |
| 1 | Продуктовые решения (раздел 3) | — |
| 2 | Фаза 1, пункты 1–4: слоты, режим, plain и with-diffs visibility | самый крупный шаг в модели |
| 3 | Фаза 1, пункты 5–8: `hasSubtreeChanges`, добивка агрегаторов, barrel'ы, JSO | средний |
| 4 | Фаза 2, пункты 1–3: контекст, дескрипторы, `RowSequence` | самый крупный шаг во viewers |
| 5 | Фаза 2, пункт 4: `UnchangedRowsGroup` | малый |
| 6 | Фаза 2, пункт 5: JSO-рекурсия и авто-раскрытие | средний |
| 7 | Фаза 2, пункт 6: автовыбор вкладок | малый |
| 8 | Фаза 3: samples, stories, ITs, unit-тесты | средний |

## 11. Автовыбор вкладки с изменениями

В `MessageSectionsViewer` уже собирается `sectionSelectorOptions` с `diffsSummary` и `descendantDiffsSummary`
на каждой опции, а `Selector.resolveOptionDiffPresentation` умеет по ним определять наличие изменений.
Достаточно расширить существующий `useEffect` начальной инициализации: в режиме `changed-only` выбирать первую
опцию с непустым объединением сводок, иначе — первую, как сейчас. Тот же приём применяется к селектору
протоколов в `BindingsNodeViewer`, где сводки тоже уже прокинуты в опции.

Автовыбор должен срабатывать при входе в режим, а не на каждый ререндер, иначе пользователь не сможет
переключиться на вкладку без изменений.

## 12. Риски и ловушки

| Риск | Последствие | Митигация |
| --- | --- | --- |
| Скрытие строк ломает `data-precededby` | Плывут отступы, разрывается вертикальная линия `LevelIndicator` | `precededBy` вычисляет `RowSequence`, а не viewer; padding — внутри row-body, не margin (урок `ddlapi-indentations-update`) |
| `padding-top` или `margin` на плейсхолдере | Diff-бейдж соседней строки вылезает за полосу | Плейсхолдер — обычная строка того же шаблона |
| `JsoDiffsViewer` перекрывает контексты | Фильтр не доходит до bindings и extensions | Явный prop `changesFilter` с приоритетом над контекстом |
| Смешение «скрыть строку» и `isContentVisible` по сторонам | Пропадает содержимое одной колонки | Скрытие — только на уровне всей строки |
| Пересчёт при переключении режима | Просадка на больших документах | В модели — `Set<DiffType>` один раз на build; предикат — мемоизированно во viewer'е |
| Изменение только в невыбранной вкладке | Пользователь видит пустой экран | Автовыбор вкладки с изменениями (раздел 11) |
| Визуальный шум при «заголовок всегда видим» | Цепочка `Channel → Servers → Extensions → Bindings`, под каждым только кнопка | Возможное правило «схлопывать подряд идущие пустые секции в один фрагмент» — требует продуктового решения |
| Счётчик скрытых строк для opaque-блоков | Число строк внутри legacy-viewer неизвестно без рендера | Кнопка без счётчика либо текст «Expand unchanged content» |

## 13. Побочные улучшения

Работа естественным образом закрывает накопленный долг:

- уходят четырёхуровневые тернарники `data-precededby` в `MessageChannelNodeViewer` и
  `MessageContentNodeViewer`;
- `shouldBeDisplayed` перестаёт быть viewer-утилитой и становится частью модели (Phase 1 node-visibility для
  AsyncAPI);
- реализуется давно висящий `hidden={false} // TODO: Implement diffs severities filters` — фильтр по типам
  изменений ложится в тот же механизм.

## 14. Допущения и открытые вопросы

1. **Разведение section row и data node row** (раздел 8.1) выведено из формулировки требования, а не
   подтверждено продуктом. Если считать, что вложенные объекты в bindings — тоже «структура и всегда видны»,
   режим перестанет работать в глубине. Подтвердить до Фазы 1.
2. **Схлопывание подряд идущих пустых секций** — нужно ли, и если да, то по какому правилу.
3. **Счётчик на кнопке** — нужен ли вообще, и что показывать для неделимых блоков.
4. **Сохранение состояния раскрытых фрагментов** при переключении секции в селекторе и при выходе и возврате
   в режим.
5. **Влияние будущего фильтра по `DiffType`** на понятие «изменение» для этого режима.
6. **Момент включения DDL и самостоятельного `JsoDiffsViewer`** — абстракции проектируются cross-spec, но
   включение отложено.
