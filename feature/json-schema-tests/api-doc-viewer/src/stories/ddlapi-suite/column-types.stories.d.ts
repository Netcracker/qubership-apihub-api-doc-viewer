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
export declare const Bigint: Story;
export declare const Bit: Story;
export declare const BitVarying: Story;
export declare const Boolean: Story;
export declare const Box: Story;
export declare const Bytea: Story;
export declare const Char: Story;
export declare const Character: Story;
export declare const CharacterVarying: Story;
export declare const Cidr: Story;
export declare const Circle: Story;
export declare const Date: Story;
export declare const DecimalPrecisionScale: Story;
export declare const Domain: Story;
export declare const DoublePrecision: Story;
export declare const Enum: Story;
export declare const Inet: Story;
export declare const Integer: Story;
export declare const Interval: Story;
export declare const Json: Story;
export declare const Jsonb: Story;
export declare const Line: Story;
export declare const Lseg: Story;
export declare const Macaddr: Story;
export declare const Macaddr8: Story;
export declare const Money: Story;
export declare const Numeric: Story;
export declare const NumericPrecisionScale: Story;
export declare const Path: Story;
export declare const Point: Story;
export declare const Polygon: Story;
export declare const Real: Story;
export declare const Smallint: Story;
export declare const Text: Story;
export declare const Time: Story;
export declare const TimePrecision: Story;
export declare const TimeWithTimeZone: Story;
export declare const Timestamp: Story;
export declare const TimestampPrecision: Story;
export declare const Timestamptz: Story;
export declare const Tsquery: Story;
export declare const Tsvector: Story;
export declare const Uuid: Story;
export declare const Varchar: Story;
export declare const Xml: Story;
