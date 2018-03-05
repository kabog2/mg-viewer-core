/// <reference types="openlayers" />
import { MGImageLayer, MGConfigArcGISLayer } from './all';
import * as ol from 'openlayers';
export declare class MGArcGIS extends MGImageLayer {
    _sourceImage: ol.source.ImageArcGISRest;
    _sourceTiled: ol.source.TileArcGISRest;
    _loadCapabilities: boolean;
    configureArcGIS(config: MGConfigArcGISLayer): void;
    createTileSource(config: MGConfigArcGISLayer): ol.source.TileArcGISRest;
    createImageSource(config: MGConfigArcGISLayer): ol.source.ImageArcGISRest;
}
