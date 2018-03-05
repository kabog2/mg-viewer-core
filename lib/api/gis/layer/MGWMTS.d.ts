/// <reference types="openlayers" />
import { MGImageLayer, MGConfigWMTSLayer } from './all';
import * as ol from 'openlayers';
export declare class MGWMTS extends MGImageLayer {
    _tiled: boolean;
    _sourceTiled: ol.source.WMTS;
    _loadCapabilities: boolean;
    configureWMTS(config: MGConfigWMTSLayer): void;
    createTileSource(config: MGConfigWMTSLayer): ol.source.WMTS;
    createImageSource(config: MGConfigWMTSLayer): ol.source.ImageWMS;
    parseCapabilities(capabilities: string): any;
}
