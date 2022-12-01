import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './view/login/login.component';
import { ReactiveFormsModule, FormsModule} from "@angular/forms";
import { RegistroComponent } from './view/registro/registro.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { VerificacionComponent } from './view/verificacion/verificacion.component';
import { VerificacionErrorComponent } from './view/verificacion-error/verificacion-error.component';
import { VerificacionexitosaComponent } from './view/verificacionexitosa/verificacionexitosa.component';
import { RecuperacionComponent } from './view/recuperacion/recuperacion.component';

import { EnvioRecuperacionComponent } from './view/envio-recuperacion/envio-recuperacion.component';

import { CorreoRecuperacionComponent } from './view/correo-recuperacion/correo-recuperacion.component';
import { NavbarComponent } from './view/navbar/navbar.component';
import { RecuperacionErrorComponent } from './view/recuperacion-error/recuperacion-error.component';
import { ListaUsuariosComponent } from './view/lista-usuarios/lista-usuarios.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {AuthInterceptor} from "./interceptors/auth.interceptor";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    VerificacionComponent,
    VerificacionErrorComponent,
    VerificacionexitosaComponent,
    RecuperacionComponent,

    EnvioRecuperacionComponent,

    CorreoRecuperacionComponent,
      NavbarComponent,
      RecuperacionErrorComponent,
      ListaUsuariosComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
