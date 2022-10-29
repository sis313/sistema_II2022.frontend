import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from '../../service/cargar-scripts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cargarScriptsService:CargarScriptsService) { 
    cargarScriptsService.cargarScripts(['header']);
  }

  ngOnInit(): void {
  }

}
