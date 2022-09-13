import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-verificacion-error',
  templateUrl: './verificacion-error.component.html',
  styleUrls: ['./verificacion-error.component.css']
})
export class VerificacionErrorComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
