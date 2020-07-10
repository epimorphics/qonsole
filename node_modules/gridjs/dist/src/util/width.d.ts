export declare function width(width: string | number, containerWidth?: number): number;
export declare function px(width: number): string;
/**
 * Accepts a ShadowTable and tries to find the clientWidth
 * that is already rendered on the web browser
 *
 * @param shadowTable
 * @param columnIndex
 */
export declare function getWidth(shadowTable: Element, columnIndex: any): number;
