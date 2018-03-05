export declare enum MGLayerTypes {
    WMS = "WMS",
    WMTS = "WMTS",
    ArcGIS = "ArcGIS",
    XYZ = "XYZ",
    OSM = "OSM",
    GROUP = "GROUP",
}
export declare class MGConfigLayer {
    id: string;
    type: MGLayerTypes;
    label: string | undefined;
    description: string | undefined;
    url: string;
    projection: string | undefined;
    tiled: boolean | undefined;
    ids: string[];
    maxResolution: number | undefined;
    minResolution: number | undefined;
    zIndex: number | undefined;
    opacity: number | undefined;
    extent: [number, number, number, number] | undefined;
    visible: boolean;
    selected: boolean | undefined;
    constructor(json: any);
}
export declare class MGConfigGroupLayer extends MGConfigLayer {
    layers: MGConfigLayer[];
}
export declare class MGConfigOSMLayer extends MGConfigLayer {
}
export declare class MGConfigArcGISLayer extends MGConfigLayer {
    urlCapabilities: string | undefined;
}
export declare class MGConfigWMSLayer extends MGConfigLayer {
    params: any;
    urlCapabilities: string | undefined;
}
export declare class MGConfigWMTSLayer extends MGConfigLayer {
    matrixSet: string;
    urlCapabilities: string | undefined;
}
export declare class MGConfigXYZLayer extends MGConfigLayer {
}
export declare class MGConfigLayers {
    basemaps: (MGConfigLayer)[];
    layers: (MGConfigLayer)[];
    constructor(json: any);
    parseJson(json: any): MGConfigLayer;
}
export default MGConfigLayers;
