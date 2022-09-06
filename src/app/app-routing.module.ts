import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NegocioComponent } from './view/negocio/negocio.component';
import { ProductoComponent } from './view/producto/producto.component';
import { SucursalComponent } from './view/sucursal/sucursal.component';

const routes: Routes = [
  {
    path:'',component:NegocioComponent
    
  },
  {
    path:'negocio',component:NegocioComponent
    
  },
  {
    path:'sucursal',component:SucursalComponent
  },
  {
    path:'producto',component:ProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
