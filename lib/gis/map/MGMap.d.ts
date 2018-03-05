/// <reference types="openlayers" />
import { MGBase, MGConfigViewerMap, MGView } from '../../all';
import * as ol from 'openlayers';
import 'openlayers/css/ol.css';
import { MGLayer } from '../layer/MGLayer';
export declare class MGMap extends MGBase {
    _olMap: ol.Map;
    _view: MGView;
    _basemap: MGLayer;
    _layers: MGLayer[];
    constructor(config: MGConfigViewerMap);
    configure(config: MGConfigViewerMap): void;
    view: MGView;
    basemap: MGLayer;
    layers: MGLayer[];
}
export default MGMap;
