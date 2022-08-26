import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { HeaderComponent } from './layout/header/header.component';
import { MapComponent } from './View/map/map.component';
import { ReporteGeneralComponent } from './View/reporte-general/reporte-general.component';
import { NewsComponent } from './View/news/news.component';
import { InformationComponent } from './View/information/information.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: "reporte-general",component: ReporteGeneralComponent
      },
      {
        path: "news", component: NewsComponent
      },
      {
        path: "information", component: InformationComponent
      },
      {
        path: "mapa",component: MapComponent
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
