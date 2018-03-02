/// <reference types="openlayers" />
import { MGSourceLayer } from './all';
import * as ol from 'openlayers';
export declare abstract class MGImageLayer extends MGSourceLayer {
    _layerImage: ol.layer.Image;
    _layerTiled: ol.layer.Tile;
}
