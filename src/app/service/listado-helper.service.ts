import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ListadoHelperService {
  private message = new BehaviorSubject<string>('0');
  private id_negocio=new BehaviorSubject<Object>([]);
  public customMessage = this.message.asObservable();
  public cambiosIdNegocioObservable = this.id_negocio.asObservable();
  constructor() {}
  public changeMessage(msg: string): void {
    this.message.next(msg);
  }
  public cambiarIdNegocio(id_negocio: Object): void {
    console.log("Cambiar ID "+id_negocio);
    this.id_negocio.next(id_negocio);
  }
}