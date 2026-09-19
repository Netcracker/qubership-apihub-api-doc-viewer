# Review requirements and goals

## Target of review

`JsonSchemaNextViewer`, `JsonSchemaNextDiffsViewer` and everything related to them in `next-data-model`, `api-doc-viewer` packages except `stories`, `it` directories (this is testing, out of scope of this review & refactoring)

## Main constraints, rules, explanations of `qubership-apihub-api-doc-viewer` for architecture building and review/refactoring

### Strict **no**

- type assertions (TS constructions like `value as MyType`) except cases we avoiding arhictecture features of TypeScript (rule: `we absolutely, 100 percent sure that this value is of asserted type but TypeScript cannot infer it due to some reason, never else`);
- trailing functions, bunches/sets/palettes of functions because they are not strictly encapsulated (they're encapsuled only speculatively, by agreements that can be easily violated without type safety) - logic must be encapsulated **only** with OOP principles;
- literal string constants, espically duplicated ones (instead of declaring constant or set of constants, we use literal string 1 or more times);
- never create/use internal components inside components (no declaration of components inside body of another component);
- none of literal or functional (logical) duplications of algorithms, approaches, methods, functions, helpers;
- no inline types, always attempt create type aliases or classes or interfaces;
- no logic of calculating, aggregating diffs in components or related functions/classes-helpers - such logic **MUST BE ONLY** in `next-data-model`;
- never abuse React state like I did in legacy components (bad pattern: `api-state-model`).

### Strict **always**

- in `next-data-model` the most logic except of integration with 3rd-party libraries like `json-crawl`, `api-diff`, `api-unifier` **MUST BE** written following SOLID and OOP principles.
- all references, usages of values should be type-safe like in Java, the most important cause of reworking legacy JSON Schema Viewer is that in the legacy there were really many `any`, `unknown`, type errors suppressions and as a result it lead to completely understandable, unscalable, unsupportable code.

### Rules and approaches

#### Less types/classes/interfaces is better than more

It can be reached by more flexible type arguments, use the maximum of TypeScript abilities to make configurable and as universal as possible-types. It does not mean that you must produce enormous 1-4 types for the whole project. Just generalize domains/kinds/entities.

At the same time - one type, class, interface, method, function, package of components, set of CSS styles must be either enough universal to use in many places **or** single-responsible (synthetic example: function `count apples` must not also draw apples, make a fresh from apples and so on).

#### Less functions/methods is better than more

It can be reached by more flexible type arguments, use the maximum of TypeScript abilities to make configurable and as universal as possible-types. It does not mean that you must produce enormous 1-4 types for the whole project. Just generalize domains/kinds/entities.

At the same time - remember that a function/method must be signle-responsible.

#### CSS styles must be clean, understandable, reusable

Try to imagine uniformed design system based on existing new components. In this sub-task you may look outside JSON Schema scope to `asyncapi`, `ddlapi`, `jso` and **never** look at `GraphQL` or `GraphSchema`.

The most generic styles or used for 2 and more API types (jso, json schema, asyncapi, ddlapi) can be generalized and shared, specific should be defined for specific places and components.

By the way, you can try to follow the methodology "block-element-modifier" from Yandex or something even better, if you know.

#### The whole JSON Schema Next Viewer architecture mermaid diagram

I need to have a big picture which can I see to understand my overall-architecture. You can omit some small auxiliary functions and type aliases or something small else (or better - collapse them under "umbrella-word", like 'auxiliary functions to calculate count of the entity A').

Maybe it's worth to have 2 separate diagrams - of `next-data-model` and `api-doc-viewer` on the one picture.

Also I want to see clear splitting between abstract model/viewer layer to concrete/specific implementation and references between them.

This diagram almost all the time should be static but I would like to have skill to easy update it by actual state of API type displayed on it or to easy create new for new/another existing API type.

By the way, such "big picture" must be different for:
1. different API types;
2. different API type viewers - with and without diffs.

#### Minimize blind spots, grey areas and so on

We need to keep agents documentation consistent to current approved implementation, minimal and enough to understand specific requirements.

During the developing features, components, classes and so on, something could be added accidentally, something intentionally but against of current behavior now and so on.

I would like to have clear, compact, but comprehensive agents documentation.

### Pattern "Container and Presentational Components" for React components

There are 2 kinds of components: big complex components which consists of smaller ones or small leaf components which are signle-responsible (e.g. displaying value in block - small "presentational" compoennt, but row with the value - big "container" component).

Presentational components should be as universal as possible. Contaienr components are very specific and almost always can't be reused. In some cases we still make component generic like `TitleRow` and `TextRow` but some API type specific logic can "flow" into the generic component, pay attention for that and clarify borders.

#### Pattern "Strategy", "Abstract Factory"

Data model is driven by 2 brand-fields in its nodes: `type` and `kind`. And this is the best reason to use these 2 patterns because we can split logic to generic/abstract which fits to all types and kinds and to type/kind/case specific. Try to avoid too generic enormous handlers for "anything and everything".

## Recommendations

- Write results of analysis into markdown file because it will be too big to keep it in chat;
- From found issues generate table with columns: severity, where, what, broken constraint(s), suggested fix(es). Also you may use internal document references if broken constraints and fixes are too long to write them in compact table;
- Do not consider `asyncapi`, `ddlapi` model and viewers as best practices because they are good but still need deep review and refactoring (**out of scope of this review**). But you can suggest solutions applied there if they seem better;
- **Never analyze and change: samples, stories, screenshot tests.**
- **Never change: NPM scripts, TS, Vite, Eslint and other configs. But you may make notes in special section of your document and request my approval.**
- **Never run any NPM scripts except static storybook server.**