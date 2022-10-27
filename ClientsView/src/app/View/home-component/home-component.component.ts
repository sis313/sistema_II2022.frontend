import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor(private titleService:Title) { 
    this.titleService.setTitle("Inicio | BO Active");
  }

  ngOnInit(): void {
    localStorage.setItem('token', "3");
  }

}
