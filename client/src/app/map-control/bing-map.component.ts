import { Component, Input, Output, EventEmitter, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import {
  MarkerTypeId, IMapOptions, IMarkerEvent, ILatLong, MapTypeId, Marker, MapComponent, BingMarker, MapMarkerDirective, IMarkerIconInfo
} from 'angular-maps';
import { Address } from '../dto/address';

@Component({
  selector: 'bing-map',
  templateUrl: './bing-map.component.html',
  styles: []
})
export class BingMapComponent {
  @ViewChild('marker') map;
  @Input() addressesBit:number[];

  @Input() addresses:Address[];
  @Input() centerlat:number=30;
  @Input() centerlong:number=30;
  @Input() Zoom:number=13;
    
  //@Input() draggable: boolean = false;
  //@Input() title: string;

  //@Input() latitude: number ;
  //@Output() latitudeChanged: EventEmitter<number> = new EventEmitter<number>();

  //@Input() longitude: number;
  //@Output() longitudeChanged: EventEmitter<number> = new EventEmitter<number>();

  _markerTypeId = MarkerTypeId;
  _options: IMapOptions = {
    disableBirdseye: false,
    disableStreetside: false,
    navigationBarMode: 1,
    mapTypeId:MapTypeId.road
  };

  constructor() { }

  a(v:any){
    debugger
  }
/*
  markerMoved(e: IMarkerEvent) {
    this.latitude = e.Location.latitude;
    this.longitude = e.Location.longitude;

    this.latitudeChanged.emit(this.latitude);
    this.longitudeChanged.emit(this.longitude);
  }
*/
}
