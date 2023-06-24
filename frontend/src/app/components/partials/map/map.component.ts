import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LatLngTuple, map, Map, tileLayer} from 'leaflet';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{

  private readonly DEAFAULT_LATLNG:LatLngTuple=[13.75,21.62];

  //'map' from #map in html div , static:true makes it available in ngOnInit
  @ViewChild('map',{static:true})
  mapRef!:ElementRef;

  map!:Map;

  constructor(){}

  ngOnInit(): void {
    this.initializeMap();
  }

  initializeMap(){
    if(this.map){
      return;
    }

    this.map=map(this.mapRef.nativeElement, {
      attributionControl:false
    }).setView(this.DEAFAULT_LATLNG,1);

    tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(this.map);
  }

  findMyLocation(){

  }

}
