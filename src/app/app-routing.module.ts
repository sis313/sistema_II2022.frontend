import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessListComponent } from './components/business-list/business-list.component';
import { UpdateAdminComponent } from './components/update-admin/update-admin.component';

const routes: Routes = [
  { path: 'updateAdmin/:id', component: UpdateAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
