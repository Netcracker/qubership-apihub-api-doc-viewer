/** Font size (px) of the address value in `AddressRow`: shrinks from `base` to `min`, then wraps. */
export declare const ADDRESS_VALUE_FONT_SIZE: {
    readonly base: 18;
    readonly min: 12;
};
/** One side's address value: its one-line width at the base size and the width it may take. */
export type AddressValueMeasurement = {
    natural: number;
    available: number;
};
export declare class AddressValueFit {
    /** The largest size between `min` and `base` at which the value fits on one line. */
    static fitSize(measurement: AddressValueMeasurement): number;
    /** Both sides use one size: the smallest fitted size among the measured sides. */
    static sharedSize(measurements: ReadonlyArray<AddressValueMeasurement | undefined>): number;
    /** The value does not fit on one line at `fontSize` (only possible at the minimum size). */
    static wraps(measurement: AddressValueMeasurement | undefined, fontSize: number): boolean;
    static isSame(first: AddressValueMeasurement | undefined, second: AddressValueMeasurement): boolean;
}
