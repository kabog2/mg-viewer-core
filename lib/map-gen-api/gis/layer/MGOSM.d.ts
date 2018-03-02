/// <reference types="openlayers" />
import { MGImageLayer, MGConfigOSMLayer } from './all';
import * as ol from 'openlayers';
export declare class MGOSM extends MGImageLayer {
    _tiled: boolean;
    _sourceTiled: ol.source.OSM;
    createTileSource(config: MGConfigOSMLayer): ol.source.OSM;
    createImageSource(config: MGConfigOSMLayer): ol.source.Image;
    load(): Promise<any>;
}
