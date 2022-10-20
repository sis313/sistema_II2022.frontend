import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessListComponent } from './components/business-list/business-list.component';
import { MainComponent } from './components/main/main.component';
import { UpdateAdminComponent } from './components/update-admin/update-admin.component';
import { UpdateBusinessComponent } from './components/update-business/update-business.component';
import { InactiveBusinessListComponent } from './components/inactive-business-list/inactive-business-list.component';
import { OwnerListComponent } from './components/owner-list/owner-list.component';
import { StoreListComponent } from './components/store-list/store-list.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { NavStyleComponent } from './components/nav-style/nav-style.component';
import { InactiveOwnerListComponent } from './components/inactive-owner-list/inactive-owner-list.component';
import { BranchListComponent } from './components/branch-list/branch-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    component: MainComponent,
  },

  { path: 'updateAdmin/:id', component: UpdateAdminComponent },
  { path: 'activeBusinessList', component: BusinessListComponent },
  { path: 'inactiveBusinessList', component: InactiveBusinessListComponent},
  { path: 'inactiveOwnerList', component: InactiveOwnerListComponent},
  { path: 'updateBusiness/:id', component: UpdateBusinessComponent },
  { path: 'ownerList', component: OwnerListComponent },
  { path: 'adminHome', component: AdminHomeComponent },
  { path: 'storeList', component: StoreListComponent },
  { path: 'button', component: NavStyleComponent },
  { path: 'branchList', component:BranchListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
