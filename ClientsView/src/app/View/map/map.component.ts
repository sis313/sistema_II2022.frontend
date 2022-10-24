import { Component, OnInit } from '@angular/core';
import { Map, marker, tileLayer, Icon } from 'leaflet';
import { Branch } from 'src/app/Model/branch.model';
import { BranchService } from 'src/app/Service/branch.service';
import { LocationService } from 'src/app/Service/location.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  //Assets Location Folder
  assetsLocation: string = '../../../assets/map';

  locationD: Location[] = [];
  branchD: Branch[] = [];

  //Map variables
  actualPos: any;
  mainMap: any;
  // userIcon = new this.LeafIcon({iconUrl: this.assetsLocation + '/marker/user.png'});

  constructor(
    private branchService: BranchService,
    private locationService: LocationService
  ) {}

  async ngOnInit() {
    //Get actual position
    this.actualPos = await this.getLocation();

    //Charge all branches
    await this.onCharge();

    //Create the map
    this.mainMap = await new Map('map').setView(
      [this.actualPos.lat, this.actualPos.lng],
      20
    );

    //Add the tile layer
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 16,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.mainMap);

    //Create user Icon
    let userIcon = new Icon({
      iconUrl: this.assetsLocation + '/marker/user.png',
      iconSize: [20, 30],
    });

    //Create the user marker
    marker([this.actualPos.lat, this.actualPos.lng], { icon: userIcon }).addTo(
      this.mainMap
    );

    //Create the branch markers
    this.branchD.forEach((item) => {
      let test = item;
      let markerTest = marker([test.latitude, test.longitude]);

      markerTest
        .bindPopup(
          `<b class="popup-title">${test.businessName}</b>
          <div>${test.address}</div>
          <img src="${test.image}">`
        )
        .openPopup();
      markerTest.addTo(this.mainMap);
    });
  }

  async onCharge() {
    await this.branchService
      .getAllBranch()
      .toPromise()
      .then((data) => {
        this.branchD = data;
        this.branchService.setBranchName(this.branchD);
        // console.log(this.branchService.getBranchName());
      });
  }

  async getLocation() {
    let poss;
    await this.locationService.getPosition().then((pos) => {
      console.log(pos);
      poss = pos;
    });
    return poss;
  }

  /**
   *
   * Center the map in display
   *
   * @returns void
   *
   */
  centerMap() {
    this.mainMap.flyTo([this.actualPos.lat, this.actualPos.lng], 16);
  }
}
