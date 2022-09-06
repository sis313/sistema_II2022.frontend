import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NegocioComponent } from './view/negocio/negocio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SucursalComponent } from './view/sucursal/sucursal.component';
import { ProductoComponent } from './view/producto/producto.component';

@NgModule({
  declarations: [
    AppComponent,
    NegocioComponent,
    SucursalComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
