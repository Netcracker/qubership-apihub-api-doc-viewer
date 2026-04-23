<agents-context>
  <package-name>@netcracker/qubership-apihub-api-doc-viewer</package-name>

  <technical-stack>
    - TypeScript 5
    - React
    - JSX
    - CSS, Tailwind CSS
    - Vite, Lerna
    - Eslint
    - Storybook
    - Jest
  </technical-stack>

  <domain>
    <description>
      Displaying documents following one of API Types Specifications as human-readable pages.
    </description>
    <api-types>
      - JSON Schema
      - GraphQL
      - AsyncAPI
      - JSO (JavaScript Object)
    </api-types>
    <definitions>
      <normalized-document>
        Document of one of API Types which has been preprocessed by <unifier-dependency>@netcracker/qubership-apihub-api-unifier</unifier-dependency> with resolved refs, merged allOf combiners, lifted oneOf/anyOf combiners corressponding to appropriate specification rules.
      </normalized-document>
      <merged-document>
        Result of comparison of 2 normalized documents. Contains invisible symbolic keys pointing to special entity Diff Record or Aggregated Diffs. Proudced by <diff-dependency>@netcracker/qubership-apihub-api-diff</diff-dependency>.
      </merged-document>
      <diff>
        <synonym-name>change</synonym-name>
        <path>Entity declared in <diff-dependency> as a type.</path>
        <important-fields>
          - type
          - action
          - beforeValue
          - afterValue
          - beforeDeclarationPaths
          - afterDeclarationPaths
        </important-fields>
        <task>
          Analyze type of each of <important-fields> and use this knowledge during adjusting types in development.
        </task>
      </diff>
    </definitions>
  </domain>

  <development-rules>
    <code-style>
      1. Describe types for any domain entities.
      2. Avoid type assertions everywhere it is possible. Signatures of methods, functions, classes, components must be designed in way that type assertions are not needed.
    </code-style>
    <critical-constraints>
      1. Never change files in directory ./packages/api-data-model. You MAY use them as a context only.
      2. Never change files in directory ./packages/api-state-model. Do not use them as a context as well.
    </critical-constraints>
    <architecture>
      <pattern>
        We strive to have multi-layer architecture of application.
        View layer must be drawn (rendered, displayed) based on data model from data layer.
       </pattern>
      <layers>
        <data-layer>
          <legacy-data-model>
            <path>./packages/api-data-model</path>
            <description>
              Data model used for JSON Schema, GraphQL API Types.
            </description>
          </legacy-data-model>
          <actual-data-model>
            <path>./packages/next-data-model</path>
            <description>
              Data model used for AsyncAPI, JSO API Types.
            </description>
          </actual-data-model>
        </data-layer>
        <view-layer>
          <path>./packages/api-doc-viewer</path>
        </view-layer>
        <test-samples-layer>
          <path>./packages/samples</path>
        </test-samples-layer>
      </layers>
      <important-dependencies>
        <unifier-dependency />
        <diff-dependency />
      </important-dependencies>
    </architecture>
  </development-rules>
</agents-context>