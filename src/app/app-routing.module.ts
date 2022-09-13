import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { ListadoServiciosComponent } from './Components/listado-servicios/listado-servicios.component';
import { CrearServiciosComponent } from './Components/crear-servicios/crear-servicios.component';
import { EditarServiciosComponent } from './Components/editar-servicios/editar-servicios.component';

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
    redirectTo: 'servicios',
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
