import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from "./view/login/login.component";
import {RegistroComponent} from "./view/registro/registro.component";

const routes: Routes = [
  {path:'registro',
  component: RegistroComponent
  },
  {path:'',
    component: LoginComponent, pathMatch:'full'
  },
  {path:'tipoDeUsuario',
    component: RegistroComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
