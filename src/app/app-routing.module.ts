import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './view/producto/producto.component';
import { SucursalComponent } from './view/sucursal/sucursal.component';
import { ListaSucursalComponent } from './view/lista-sucursal/lista-sucursal.component';
import { MainComponent } from './Components/main/main.component';
import { EditarServiciosComponent } from './Components/editar-servicios/editar-servicios.component';
import { ListaNegocioComponent } from './view/lista-negocio/lista-negocio.component';
import { NegocioComponent } from './view/negocio/negocio.component';
import { ListadoServiciosComponent } from './Components/listado-servicios/listado-servicios.component';
import { CrearServiciosComponent } from './Components/crear-servicios/crear-servicios.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ListadoSucursalesPorIDComponent } from './Components/listado-sucursales-por-id/listado-sucursales-por-id.component';
import { EditarSucursalComponent } from './Components/editar-sucursal/editar-sucursal.component';
import { ListadoRatingsMenuComponent } from './Components/listado-ratings-menu/listado-ratings-menu.component';
import { RedesSocialesComponent } from './Components/redes-sociales/redes-sociales.component';

const routes: Routes = [
  {
    path:'',component:MainComponent
    
  },
  // {
  //   path:'producto',component:ProductoComponent
  // },
  { 
    path: 'adm',
    component: MainComponent,
    children: [
      { 
        path:'',component:ListaNegocioComponent
      },
      {
        path:'lista-negocio',component:ListaNegocioComponent
      },
      {
        path: "negocio",component: NegocioComponent
      },
      {
        path: "editar-negocio",component: EditarServiciosComponent,
      },
      {
        path:'dashboard',component:DashboardComponent
      },
      {
        path:'lista-sucursal',component:ListaSucursalComponent
      },
      {
        path:'editar-sucursal/:id',component:EditarSucursalComponent
      },
      {
        path:'editar-sucursal',component:EditarSucursalComponent
      },
      {
        path:'crear-sucursal',component:SucursalComponent
      },
      {
        path:'listado-rating-menu',component:ListadoRatingsMenuComponent
      },
      {
        path:'redes-sociales',component:RedesSocialesComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
