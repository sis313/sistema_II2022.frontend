import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NegocioComponent } from './view/negocio/negocio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SucursalComponent } from './view/sucursal/sucursal.component';
import { ProductoComponent } from './view/producto/producto.component';
import { ListaSucursalComponent } from './view/lista-sucursal/lista-sucursal.component';
import { ListaNegocioComponent } from './view/lista-negocio/lista-negocio.component';




import { CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { ListadoServiciosComponent } from './Components/listado-servicios/listado-servicios.component';
import { CrearServiciosComponent } from './Components/crear-servicios/crear-servicios.component';
import { EditarServiciosComponent } from './Components/editar-servicios/editar-servicios.component';
import { HeaderComponent } from './Components/header/header.component';
import { MainComponent } from './Components/main/main.component';
import { ListadoSucursalesPorIDComponent } from './Components/listado-sucursales-por-id/listado-sucursales-por-id.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { EditarSucursalComponent } from './Components/editar-sucursal/editar-sucursal.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { ListadoSucursalRatingComponent } from './Components/listado-sucursal-rating/listado-sucursal-rating.component';
@NgModule({
  declarations: [
    AppComponent,
    NegocioComponent,
    SucursalComponent,
    ProductoComponent,
    ListaSucursalComponent,
    ListaNegocioComponent,
    ListadoServiciosComponent,
    CrearServiciosComponent,
    EditarServiciosComponent,
    HeaderComponent,
    MainComponent,
    ListadoSucursalesPorIDComponent,
    DashboardComponent,
    EditarSucursalComponent,
    ListadoSucursalRatingComponent,
  ],
  imports: [
    HttpClientModule,
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
    FormsModule,
    Ng2GoogleChartsModule,
    NgxStarRatingModule,
    MdbModalModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
