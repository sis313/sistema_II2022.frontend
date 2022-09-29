import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from "./view/login/login.component";
import {RegistroComponent} from "./view/registro/registro.component";
import {VerificacionComponent} from "./view/verificacion/verificacion.component";
import {VerificacionErrorComponent} from "./view/verificacion-error/verificacion-error.component";
import{VerificacionexitosaComponent} from "./view/verificacionexitosa/verificacionexitosa.component";
import {RecuperacionComponent} from "./view/recuperacion/recuperacion.component";
import {CorreoRecuperacionComponent} from "./view/correo-recuperacion/correo-recuperacion.component";
import {EnvioRecuperacionComponent} from "./view/envio-recuperacion/envio-recuperacion.component";

const routes: Routes = [
  {path:'registro',
  component: RegistroComponent
  },
  {path:'',
    component: LoginComponent, pathMatch:'full'
  },
  {path:'tipoDeUsuario',
    component: RegistroComponent
  },
  {path:'verificacion',
    component: VerificacionComponent
  },
  {path:'error-verificacion',
    component: VerificacionErrorComponent
  },
  {path:'verificacion-exitosa',
    component: VerificacionexitosaComponent
  },
  {path:'recuperacion',
    component: RecuperacionComponent
  },
  {path:'correo-recuperacion',
    component: CorreoRecuperacionComponent
  },
  {path:'envio-recuperacion',
    component: EnvioRecuperacionComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
