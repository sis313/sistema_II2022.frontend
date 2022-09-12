import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateAdminComponent } from './components/update-admin/update-admin.component';
import { BusinessListComponent } from './components/business-list/business-list.component';
// import {MatTableModule} from '@angular/material/table'

@NgModule({
  declarations: [
    AppComponent,
    UpdateAdminComponent,
    BusinessListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
