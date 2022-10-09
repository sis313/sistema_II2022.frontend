import { Component, OnInit } from '@angular/core';
import { Map, marker, tileLayer } from 'leaflet';
import { LocationService } from 'src/app/Service/location.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  locationD: Location[] = []
  constructor(private locationC: LocationService) {}

  async ngOnInit(){
    await this.onCharge()
    const map = new Map('map').setView([-16.523178, -68.112209], 20);

    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    console.log("object");
    
    this.locationD.forEach(item => {
      var test = item
      var markerTest = marker([-16.523178, -68.112209]);
      markerTest.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();
      markerTest.addTo(map);
      console.log(item);
    })
  }


  async onCharge() {
    await this.locationC
      .getAllLocations()
      .toPromise()
      .then((data) => {
        console.log(data);
        this.locationD = data;
      });
  }
}
``