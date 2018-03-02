import 'openlayers/css/ol.css';
export declare class MGUtils {
    static assign(target: any, object: any): void;
    static blobToString(blob: Blob): Promise<string>;
    static get(url: string): Promise<string>;
    static scaleToResolution(scale: number): number;
    static ppi: number;
    static getScreenResolution(): number;
    static getScaleFromResolution(resolution: number, srs: string): number;
    static getResolutionFromScale(scale: number, srs: string): number;
    static transformExtent(extent: [number, number, number, number], srcSRS: string, dstSRS: string): [number, number, number, number];
    static getInstance<T>(context: Object, name: string, ...args: any[]): T;
}
export default MGUtils;
