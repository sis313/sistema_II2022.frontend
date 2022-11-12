import { Injectable } from '@angular/core';

interface Country {
  idBusiness?: number;
  name: string;
  description: string;
  idTypeBusiness: number;
  idUser: number;
  status: number;
  value:number;
}


@Injectable({
  providedIn: 'root'
})
export class CountryService {
  
  private data: Country[] = [
    {
      "idBusiness":1,
      "name": "Prueba 1",
      "description": "prueba description",
      "idTypeBusiness": 1,
      "idUser": 1,
      "status": 1,
      "value": 123
    },
    {
      "idBusiness":1,
      "name": "Prueba 1",
      "description": "prueba description",
      "idTypeBusiness": 1,
      "idUser": 1,
      "status": 1,
      "value": 123
    },
    {
      "idBusiness":1,
      "name": "Prueba 1",
      "description": "prueba description",
      "idTypeBusiness": 1,
      "idUser": 1,
      "status": 1,
      "value": 123
    },
      {
        "idBusiness":1,
        "name": "Prueba 1",
        "description": "prueba description",
        "idTypeBusiness": 1,
        "idUser": 1,
        "status": 1,
        "value": 123
    }
  ];


  get countryData() {
    return this.data;
  }

  randomData() {
    this.data = [
      {
        "idBusiness":1,
        "name": "Prueba 1",
        "description": "prueba description",
        "idTypeBusiness": 1,
        "idUser": 1,
        "status": 1,
        "value": 123
      },
      {
        "idBusiness":1,
        "name": "Prueba 1",
        "description": "prueba description",
        "idTypeBusiness": 1,
        "idUser": 1,
        "status": 1,
        "value": 123
      },
      {
        "idBusiness":1,
        "name": "Prueba 1",
        "description": "prueba description",
        "idTypeBusiness": 1,
        "idUser": 1,
        "status": 1,
        "value": 123
      },
        {
          "idBusiness":1,
          "name": "Prueba 1",
          "description": "prueba description",
          "idTypeBusiness": 1,
          "idUser": 1,
          "status": 1,
          "value": 123
      }
    ];
  }

}
