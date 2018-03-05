/// <reference types="openlayers" />
import { MGSourceLayer } from './all';
import * as ol from 'openlayers';
export declare abstract class MGVectorLayer extends MGSourceLayer {
    _layerImage: ol.layer.Vector;
    _layerTiled: ol.layer.VectorTile;
}
