/// <reference types="openlayers" />
import { MGBaseMgr, MGConfigViewerMap } from '../../all';
import * as ol from 'openlayers';
import 'openlayers/css/ol.css';
export declare class MGView extends MGBaseMgr {
    olMap: ol.Map;
    olView: ol.View;
    projection: string;
    _mapProjection: string;
    _minResolution: number | undefined;
    _maxResolution: number | undefined;
    _maxExtent: ol.Extent | undefined;
    _resolution: number;
    _center: [number, number];
    constructor(config: MGConfigViewerMap);
    configure(config: MGConfigViewerMap): void;
    adaptView(): void;
    onChangeCenter(event: ol.ObjectEvent): void;
    onChangeResolution(event: ol.ObjectEvent): void;
    setExtent(extent: [number, number, number, number], srs?: string): void;
    centerAt(center: [number, number], srs?: string): void;
    center: [number, number];
    maxScale: number | undefined;
    minScale: number | undefined;
    mapProjection: string;
}
export default MGView;
