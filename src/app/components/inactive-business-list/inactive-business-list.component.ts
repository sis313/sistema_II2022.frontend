import { Component, OnInit } from '@angular/core';
import Swal from'sweetalert2';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-inactive-business-list',
  templateUrl: './inactive-business-list.component.html',
  styleUrls: ['./inactive-business-list.component.css']
})
export class InactiveBusinessListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
