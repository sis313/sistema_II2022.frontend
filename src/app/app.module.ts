import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './view/login/login.component';
import { ReactiveFormsModule, FormsModule} from "@angular/forms";
import { RegistroComponent } from './view/registro/registro.component';
import { HttpClientModule } from '@angular/common/http';
import { VerificacionComponent } from './view/verificacion/verificacion.component';
import { VerificacionErrorComponent } from './view/verificacion-error/verificacion-error.component';
import { VerificacionexitosaComponent } from './view/verificacionexitosa/verificacionexitosa.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    VerificacionComponent,
    VerificacionErrorComponent,
    VerificacionexitosaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
