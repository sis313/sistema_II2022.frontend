import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/service/cargar-scripts.service';

@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.component.html',
  styleUrls: ['./redes-sociales.component.css']
})
export class RedesSocialesComponent implements OnInit {

  constructor(private cargarScriptsService:CargarScriptsService) { 
    cargarScriptsService.cargarScripts(["redes-sociales"]);
  }

  ngOnInit(): void {
  }

}
