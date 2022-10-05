import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Store } from '../Model/store.model';
import { CalTemp } from '../Model/calTemp.model';
import { Store } from '../Model/store.model';

@Injectable({
  providedIn: 'root',
})
export class CalTempService {
  calTemp: Store[] = [];
  store: Store[] = [];
  constructor(private http: HttpClient) {}
  setCallTempData(data: Store[]) {
    this.calTemp = data;
  }
  getCallTempData() {
    return this.calTemp;
  }

  getStoreAll() {
    //return this.http.get<any>('http://localhost:8080/Business');
  }

  getStoreNameHttp(nameStore: string) {
    // console.log('http://localhost:8080/Business/name/' + nameStore);
    // return this.http.get<any>(
    //   'http://localhost:8080/Business/name/' + nameStore
    // );
  }
  getStoreTypeHttp(typeStore: string) {
    // return this.http.get<any>(
    //   'http://localhost:8080/Business/Type/' + typeStore
    // );
  }
  getStoreTypeAndNameHttp(typeStore: string, nameStore: string) {
    // return this.http.get<any>(
    //   'http://localhost:8080/Business/filter/' + typeStore + '/' + nameStore
    // );
  }
}
