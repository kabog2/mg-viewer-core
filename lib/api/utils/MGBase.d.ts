import { MGViewer, MGConfigMgr, MGMapMgr, MGModulesMgr } from '../all';
export declare class MGBase {
    private static _mgViewer;
    private static _mgConfigMgr;
    private static _mgMapMgr;
    private static _mgModulesMgr;
    viewer: MGViewer;
    mapMgr: MGMapMgr;
    modulesMgr: MGModulesMgr;
    configMgr: MGConfigMgr;
    assign(object: any): void;
    get(url: string): Promise<string>;
    getScaleFromResolution(resolution: number, srs: string): number;
    getResolutionFromScale(scale: number, srs: string): number;
    transformExtent(extent: [number, number, number, number], srcSRS: string, dstSRS: string): [number, number, number, number];
}
export default MGBase;
