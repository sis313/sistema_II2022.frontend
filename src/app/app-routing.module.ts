import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessListComponent } from './components/business-list/business-list.component';
import { MainComponent } from './components/main/main.component';
import { UpdateAdminComponent } from './components/update-admin/update-admin.component';
import { UpdateBusinessComponent } from './components/update-business/update-business.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: 'updateAdmin/:id', component: UpdateAdminComponent },
      { path: 'business', component: BusinessListComponent },
      { path: 'updateBusiness/:id', component: UpdateBusinessComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
