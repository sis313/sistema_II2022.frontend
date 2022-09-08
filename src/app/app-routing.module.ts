import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { HeaderComponent } from './layout/header/header.component';
import { MapComponent } from './View/map/map.component';
import { ReporteGeneralComponent } from './View/reporte-general/reporte-general.component';
import { NewsComponent } from './View/news/news.component';
import { InformationComponent } from './View/information/information.component';
import { EditServiceComponent } from './View/edit-service/edit-service.component';
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
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
