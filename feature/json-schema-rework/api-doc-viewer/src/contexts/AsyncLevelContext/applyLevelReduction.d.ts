import { DiffAction } from "@netcracker/qubership-apihub-api-diff";
import { LayoutSide } from '../../types/internal/LayoutSide';
/**
 * Reduces `baseLevel` by 1 (clamped to >= 0) on the side where `reductionAction`-described
 * content is absent (add -> origin; remove -> changed); returns `baseLevel` unchanged otherwise
 * (including when `reductionAction` is undefined).
 */
export declare function applyLevelReduction(baseLevel: number, layoutSide: LayoutSide, reductionAction: typeof DiffAction.add | typeof DiffAction.remove | undefined): number;
