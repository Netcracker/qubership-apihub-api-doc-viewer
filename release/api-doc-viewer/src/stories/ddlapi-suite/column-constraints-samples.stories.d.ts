import { type DdlSamplesStoryObj } from "./ddl-samples-common";
declare const meta: {
    id: string;
    title: string;
    component: (_props: import("./ddl-samples-utils").DdlCaseStoryComponentProps) => null;
    argTypes: {
        caseId: {
            control: {
                type: "text";
            };
            table: {
                category: string;
            };
            description: string;
        };
        sampleSql: {
            control: {
                type: "text";
            };
            table: {
                category: string;
            };
            description: string;
        };
    };
};
export default meta;
type Story = DdlSamplesStoryObj;
export declare const ForeignKey: Story;
export declare const ForeignKeyCustomSchema: Story;
export declare const ForeignKeyNotNull: Story;
export declare const ForeignKeyUnique: Story;
export declare const ForeignKeyUniqueNotNull: Story;
export declare const GeneratedBigserial: Story;
export declare const GeneratedExpression: Story;
export declare const GeneratedExpressionNotNull: Story;
export declare const GeneratedIdentity: Story;
export declare const GeneratedIdentityPrimaryKey: Story;
export declare const GeneratedSerial: Story;
export declare const GeneratedSmallserial: Story;
export declare const NoConstraints: Story;
export declare const NotNull: Story;
export declare const PrimaryKey: Story;
export declare const PrimaryKeyForeignKey: Story;
export declare const PrimaryKeyForeignKeyNotNull: Story;
export declare const PrimaryKeyNotNull: Story;
export declare const SerialPrimaryKey: Story;
export declare const Unique: Story;
export declare const UniqueNotNull: Story;
