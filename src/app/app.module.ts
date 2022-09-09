import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { ListadoServiciosComponent } from './Components/G5Servicios/listado-servicios/listado-servicios.component';
import { CrearServiciosComponent } from './Components/G5Servicios/crear-servicios/crear-servicios.component';
import { EditarServiciosComponent } from './Components/G5Servicios/editar-servicios/editar-servicios.component';

import { HeaderComponent } from './Components/G5Servicios/header/header.component';
import { MainComponent } from './Components/G5Servicios/main/main.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ListadoServiciosComponent,
    CrearServiciosComponent,
    EditarServiciosComponent,
    HeaderComponent,
      MainComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatTabsModule,
    CommonModule, 
    RouterModule,  
    ReactiveFormsModule, 
    MatListModule,
    MatSidenavModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
