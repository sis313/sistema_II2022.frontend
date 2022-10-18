import { Component, OnInit } from '@angular/core';
import { Map, marker, tileLayer } from 'leaflet';
import { Branch } from 'src/app/Model/branch.model';
import { BranchService } from 'src/app/Service/branch.service';
import { LocationService } from 'src/app/Service/location.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  locationD: Location[] = [];
  branchD: Branch[] = [];
  actualPos: any;
  constructor(
    private branchService: BranchService,
    private locationService: LocationService
  ) {}

  async ngOnInit() {
    this.actualPos = await this.getLocation();
    await this.onCharge();
    console.log(this.actualPos);
    const map = await new Map('map').setView(
      [this.actualPos.lat, this.actualPos.lng],
      20
    );

    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 15,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    let markerUser = marker([this.actualPos.lat, this.actualPos.lng]).addTo(map)

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
      markerTest.addTo(map);
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
    let poss
    await this.locationService.getPosition().then((pos) => {
      //  console.log(`Position: ${pos.lng} ${pos.lat}`);
      console.log(pos);
      poss = pos
    });
    return poss;
  }
}
``;
