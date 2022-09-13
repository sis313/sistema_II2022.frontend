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

@NgModule({
  declarations: [
    AppComponent,
    NegocioComponent,
    SucursalComponent,
    ProductoComponent,
    ListaSucursalComponent,
    ListaNegocioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
