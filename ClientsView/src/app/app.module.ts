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
import { FavoritesListComponent } from './View/favorites-list/favorites-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainListComponent,
    HomeComponentComponent,
    CalSpaceComponent,
    ComentListComponent,
    MapComponent,
    FavoritesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponentComponent },
      { path: 'main', component: MainListComponent },
      { path: 'cal', component: CalSpaceComponent },
      { path: 'comment', component: ComentListComponent },
      {path: 'map', component: MapComponent},
      {path: 'favorite', component: FavoritesListComponent},

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
