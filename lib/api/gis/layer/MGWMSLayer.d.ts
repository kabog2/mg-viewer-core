/// <reference types="openlayers" />
import { MGLayer, MGConfigWMSLayer } from './all';
import * as ol from 'openlayers';
export declare class MGWMSLayer extends MGLayer {
    _capability: Object;
    createLayer(config: MGConfigWMSLayer): ol.layer.Base;
    load(): Promise<any>;
}
