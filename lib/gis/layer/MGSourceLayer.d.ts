/// <reference types="openlayers" />
import { MGLayer } from './all';
import * as ol from 'openlayers';
import { MGConfigLayer } from '../../all';
export declare abstract class MGSourceLayer extends MGLayer {
    _layerImage: ol.layer.Image;
    _layerTiled: ol.layer.Tile;
    _sourceImage: ol.source.Image;
    _sourceTiled: ol.source.Tile;
    createLayer(config: MGConfigLayer): ol.layer.Base;
    abstract createTileSource(config: MGConfigLayer): ol.source.Tile;
    abstract createImageSource(config: MGConfigLayer): ol.source.Image;
    readonly source: ol.source.Source;
    readonly layer: ol.layer.Layer;
}
