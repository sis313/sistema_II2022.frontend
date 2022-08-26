import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CityService } from 'src/app/Service/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  constructor(private cities:CityService, private router: Router) { }

  ngOnInit(): void {
  }
  
}
