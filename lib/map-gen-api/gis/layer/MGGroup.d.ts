/// <reference types="openlayers" />
import { MGLayer, MGConfigGroupLayer } from './all';
import * as ol from 'openlayers';
export declare class MGGroup extends MGLayer {
    _mgLayers: MGLayer[];
    createLayer(config: MGConfigGroupLayer): ol.layer.Group;
    load(): Promise<any>;
}
