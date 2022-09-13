import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'
import {environment} from '../../../environments/environment';
@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css']
})
export class SucursalComponent implements OnInit {

  map!: mapboxgl.Map;
 
  constructor() { }

  ngOnInit(): void {
    
    (mapboxgl as any).accessToken =environment.mapboxkey;
  
    this.map= new mapboxgl.Map({
    container: 'mapa-mapbox', // container ID
    style: 'mapbox://styles/porceljhoan/ckund5chf15l117pkjr30so2i', // style URL
    center: [-50.6462411, -21.7835007], // starting position
    zoom: 2.8 ,// starting zoom
    minZoom:2.8,
    
    });
    
    this.map.addControl(new mapboxgl.NavigationControl());
   // this.map.boxZoom.disable();
    this.map.doubleClickZoom.disable();
   // this.map.dragPan.disable();
    //this.map.keyboard.disable();
    //this.map.scrollZoom.disable();
  // this.map.touchZoomRotate.disable();
  this.map.on('click', (e) => {
    console.log(e);
    // {
    //     lngLat: {
    //         lng: 40.203,
    //         lat: -74.451
    //     },
    //     originalEvent: {...},
    //     point: {
    //         x: 266,
    //         y: 464
    //     },
    //      target: {...},
    //      type: "click"
    // }
    });
 

  }

}
