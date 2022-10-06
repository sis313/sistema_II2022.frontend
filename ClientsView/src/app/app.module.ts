import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainListComponent } from './View/main-list/main-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponentComponent } from './View/home-component/home-component.component';
import { HttpClientModule } from '@angular/common/http';
import { CalSpaceComponent } from './View/cal-space/cal-space.component';
import { ComentListComponent } from './View/comment-list/comment-list.component';
import { MapComponent } from './View/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    MainListComponent,
    HomeComponentComponent,
    CalSpaceComponent,
    ComentListComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponentComponent },
      { path: 'main', component: MainListComponent },
      { path: 'cal', component: CalSpaceComponent },
      { path: 'comment', component: ComentListComponent },
      {path: 'map', component: MapComponent},
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
