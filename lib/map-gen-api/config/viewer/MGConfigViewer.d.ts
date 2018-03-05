export declare class MGConfigViewerProxy {
    src: string;
    constructor(json?: any);
}
export declare class MGConfigViewerLoading {
    text: string;
    timeout: number;
    timeoutText: string;
    constructor(json?: any);
}
export declare class MGConfigViewerError {
    mailTo: string | null;
    constructor(json?: any);
}
export declare class MGConfigViewerCORS {
    enabled: boolean;
    constructor(json?: any);
}
export declare class MGExtent {
    label: string | null;
    extent: [number, number, number, number];
    constructor(extent: [number, number, number, number], label?: string);
}
export declare class MGConfigViewerMapExtents {
    wallonie: MGExtent;
    belgium: MGExtent;
    init: MGExtent;
    max: MGExtent | null;
    constructor(json?: any);
}
export declare class MGConfigViewerMapZooms {
    minResolution: number | undefined;
    maxResolution: number | undefined;
    minScale: number | undefined;
    maxScale: number | undefined;
    constructor(json?: any);
}
export declare class MGConfigViewerMap {
    mapProjection: string;
    projection: string;
    extents: MGConfigViewerMapExtents;
    zooms: MGConfigViewerMapZooms;
    constructor(json?: any);
}
export declare class MGConfigViewer {
    label: string;
    description: string;
    proxy: MGConfigViewerProxy;
    loading: MGConfigViewerLoading;
    error: MGConfigViewerError;
    cors: MGConfigViewerCORS;
    map: MGConfigViewerMap;
    constructor(json: any);
}
export default MGConfigViewer;
