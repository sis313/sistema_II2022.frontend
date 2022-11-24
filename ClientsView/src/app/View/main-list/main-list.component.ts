import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/Model/store.model';
import { Router } from '@angular/router';
import { CalTempService } from 'src/app/Service/calTemp.service';
import { StoreService } from 'src/app/Service/store.service';
import { CategoryService } from 'src/app/Service/category.service';
import { CalTemp } from 'src/app/Model/calTemp.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css'],
})
export class MainListComponent implements OnInit {
  nombre: string = '';
  cal: CalTemp[] = [];
  active: number = 0;
  dataSend: Store[] = [];
  storeD: Store[] = [];
  selectedCategory: number = 0;
  constructor(
    private storeC: StoreService,
    private router: Router,
    private callTempService: CalTempService,
    private titleService: Title,
    private categoryService: CategoryService
  ) {
    this.titleService.setTitle('Servicios | BO Active');
  }

  ngOnInit(): void {
    this.onCharge();
  }

  async revisarName() {
    this.storeC
      .getStoreNameHttp(this.nombre)
      .toPromise()
      .then((data) => {
        // console.log(data);
        this.storeD = data;
        this.storeC.setStoreName(this.storeD);
        console.log(this.storeC.getStoreName());
      });
    console.log(this.nombre);
  }
  modalMore() {
    this.active = 1;
    console.log(this.active);
  }

  async onCharge() {
    this.storeC
      .getStoreAll()
      .toPromise()
      .then((data) => {
        console.log(data);
        this.storeD = data;
        this.storeC.setStoreName(this.storeD);
        console.log(this.storeC.getStoreName());
      });

    this.fetchAllCategories();
  }

  async fetchAllCategories() {
    await this.categoryService
      .getAllCategories()
      .toPromise()
      .then((data) => {
        this.categoryService.setCategoryName(data);
        console.log(this.categoryService.getCategoryName());
      });
  }

  getCategories() {
    return this.categoryService.getCategoryName();
  }

  searchName() {
    console.log('Si da');
    console.log(this.nombre);
    console.log(this.selectedCategory);
    if (this.nombre == '') {
      this.onCharge();
    } else {
      this.revisarName();
    }
  }

  calificar(data: Store) {
    // console.log(dataSend)
    // for (let i in data){
    //   this.dataSend.push({
    //     id_business: data[i].id_business,
    //     name: data[i].name,
    //     description: data[i].description
    //   });
    // }

    this.dataSend.push(data);
    console.log(this.dataSend);
    this.storeC.setStoreTemp(this.dataSend);
    console.log(this.storeC.getStoreTemp());
    this.router.navigate(['/cal']);
  }
  lista() {
    this.router.navigate(['/comment']);
  }
  favorite() {
    this.router.navigate(['/favorite']);
  }
}
