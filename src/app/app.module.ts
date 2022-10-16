import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateAdminComponent } from './components/update-admin/update-admin.component';
import { BusinessListComponent } from './components/business-list/business-list.component';
import {MatTableModule} from '@angular/material/table'
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import {MatCardModule} from "@angular/material/card";
import { OwnerListComponent } from './components/owner-list/owner-list.component';
import { InactiveBusinessListComponent } from './components/inactive-business-list/inactive-business-list.component';
import {StoreListComponent} from "./components/store-list/store-list.component";
import {AdminHomeComponent} from "./components/admin-home/admin-home.component";
import { CommonModule} from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { NavStyleComponent } from './components/nav-style/nav-style.component';
import { InactiveOwnerListComponent } from './components/inactive-owner-list/inactive-owner-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateAdminComponent,
    BusinessListComponent,
    MainComponent,
    StoreListComponent,
    AdminHomeComponent,
    InactiveBusinessListComponent,
    OwnerListComponent, 
    NavComponent, NavStyleComponent, InactiveOwnerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    CommonModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
