import { MGBaseMgr, MGConfigViewerMap, MGConfigLayers, MGConfigLayer, MGLayer, MGMap, MGView } from '../all';
import 'openlayers/css/ol.css';
export declare class MGMapMgr extends MGBaseMgr {
    _map: MGMap;
    _view: MGView;
    _basemaps: MGLayer[];
    _layers: MGLayer[];
    _layerTypes: any;
    configure(mapConfig: MGConfigViewerMap, layersConfig: MGConfigLayers): void;
    configureMap(mapConfig: MGConfigViewerMap): void;
    view: MGView;
    map: MGMap;
    configureLayers(layersConfig: MGConfigLayers): Promise<any>;
    selectBasemap(): void;
    selectLayers(): void;
    addLayerType(name: string, type: any): void;
    parseLayerConfig(config: MGConfigLayer): MGLayer;
}
export default MGMapMgr;
