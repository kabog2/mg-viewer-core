/// <reference types="openlayers" />
import { MGImageLayer, MGConfigWMSLayer, MGWMSLayer } from './all';
import * as ol from 'openlayers';
export declare class MGWMS extends MGImageLayer {
    _sourceImage: ol.source.ImageWMS;
    _sourceTiled: ol.source.TileWMS;
    _layers: MGWMSLayer[];
    _loadCapabilities: boolean;
    _version: string;
    configureWMS(config: MGConfigWMSLayer): void;
    createTileSource(config: MGConfigWMSLayer): ol.source.TileWMS;
    createImageSource(config: MGConfigWMSLayer): ol.source.ImageWMS;
    parseCapabilities(capabilities: string): any;
    configureCapabilities(): void;
}
