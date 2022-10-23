import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '../Model/store.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  store: Store[] = [];
  storeTemp: Store[] = [];
  constructor(private http: HttpClient) {}
  setStoreName(data: Store[]) {
    this.store = data;
  }
  getStoreName() {
    return this.store;
  }
  setStoreTemp(data:Store[]){
    this.storeTemp = data;
  }
  getStoreTemp(){
    return this.storeTemp;
  }

  getStoreAll() {
    return this.http.get<any>('https://serviceprojectspring.herokuapp.com/api/business');
  }

  getStoreNameHttp(nameStore: string) {
    console.log('http://localhost:8080/Business/name/' + nameStore);
    return this.http.get<any>(
      'http://localhost:8080/Business/name/' + nameStore
    );
  }
  getStoreTypeHttp(typeStore: string) {
    return this.http.get<any>(
      'http://localhost:8080/Business/Type/' + typeStore
    );
  }
  getStoreTypeAndNameHttp(typeStore: string, nameStore: string) {
    return this.http.get<any>(
      'http://localhost:8080/Business/filter/' + typeStore + '/' + nameStore
    );
  }
}
