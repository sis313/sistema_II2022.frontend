import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NegocioComponent } from './view/negocio/negocio.component';
import { ProductoComponent } from './view/producto/producto.component';
import { SucursalComponent } from './view/sucursal/sucursal.component';
import { ListaSucursalComponent } from './view/lista-sucursal/lista-sucursal.component';
import { ListaNegocioComponent } from './view/lista-negocio/lista-negocio.component';

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
  },
  {
    path:'lista-sucursal',component:ListaSucursalComponent
  },
  {
    path:'lista-negocio',component:ListaNegocioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
