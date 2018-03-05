/// <reference types="openlayers" />
import { MGImageLayer, MGConfigXYZLayer } from './all';
import * as ol from 'openlayers';
export declare class MGXYZ extends MGImageLayer {
    _tiled: boolean;
    _sourceTiled: ol.source.XYZ;
    createTileSource(config: MGConfigXYZLayer): ol.source.XYZ;
    createImageSource(config: MGConfigXYZLayer): ol.source.Image;
    load(): Promise<any>;
}
