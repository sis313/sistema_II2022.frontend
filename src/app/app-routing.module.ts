import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Components/G5Servicios/main/main.component';
import { ListadoServiciosComponent } from './Components/G5Servicios/listado-servicios/listado-servicios.component';
import { CrearServiciosComponent } from './Components/G5Servicios/crear-servicios/crear-servicios.component';
import { EditarServiciosComponent } from './Components/G5Servicios/editar-servicios/editar-servicios.component';

const routes: Routes = [
  { 
    path: 'servicios',
    component: MainComponent,
    children: [
      {
        path: "listarServicios",component: ListadoServiciosComponent
      },
      {
        path: "crearServicios",component: CrearServiciosComponent
      },
      {
        path: "editarServicios",component: EditarServiciosComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
