import { MGBaseMgr, MGConfigViewer, MGConfigLayers } from '../all';
export declare class MGConfigMgr extends MGBaseMgr {
    configViewer: MGConfigViewer;
    configLayers: MGConfigLayers;
    readonly default: any;
    init(): Promise<undefined>;
}
export default MGConfigMgr;
