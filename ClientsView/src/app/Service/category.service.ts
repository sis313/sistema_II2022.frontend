import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../Model/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  category: Category[] = [];
  categoryTemp: Category[] = [];
  constructor(private http: HttpClient) {}

  setCategoryName(data: Category[]) {
    this.category = data;
  }

  getCategoryName() {
    return this.category;
  }
  getAllCategories() {
    return this.http.get<any>(
      'https://serviceprojectspring.herokuapp.com/api/typeBusiness'
    );
  }
}
