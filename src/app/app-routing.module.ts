import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessListComponent } from './components/business-list/business-list.component';
import { UpdateAdminComponent } from './components/update-admin/update-admin.component';
import { UpdateBusinessComponent } from './components/update-business/update-business.component';
import { InactiveBusinessListComponent } from './components/inactive-business-list/inactive-business-list.component';

const routes: Routes = [
  { path: 'updateAdmin/:id', component: UpdateAdminComponent },
  { path: 'activeBusinessList', component: BusinessListComponent },
  { path: 'updateBusiness/:id', component: UpdateBusinessComponent },
  { path: 'inactiveBusinessList', component: InactiveBusinessListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
