import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location } from '../Model/location.model';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  store: Location[] = [];
  storeTemp: Location[] = [];
  constructor(private http: HttpClient) {}
  setStoreName(data: Location[]) {
    this.store = data;
  }
  getStoreName() {
    return this.store;
  }
  setStoreTemp(data: Location[]) {
    this.storeTemp = data;
  }
  getStoreTemp() {
    return this.storeTemp;
  }

  getAllLocations() {
    return this.http.get<any>(
      'https://serviceprojectspring.herokuapp.com/api/location'
    );
  }

  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (resp) => {
          resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
}
