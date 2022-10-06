import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-recuperacion-error',
  templateUrl: './recuperacion-error.component.html',
  styleUrls: ['./recuperacion-error.component.css']
})
export class RecuperacionErrorComponent implements OnInit {

  constructor(private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
