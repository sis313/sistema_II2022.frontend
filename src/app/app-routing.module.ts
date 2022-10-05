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

const routes: Routes = [
  {
    path:'',component:NegocioComponent
    
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
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'editar-sucursal/:id',component:EditarSucursalComponent
  },
  { 
    path: 'servicios',
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
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
