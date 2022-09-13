import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-verificacionexitosa',
  templateUrl: './verificacionexitosa.component.html',
  styleUrls: ['./verificacionexitosa.component.css']
})
export class VerificacionexitosaComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
