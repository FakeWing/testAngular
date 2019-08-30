import { Component, OnInit } from '@angular/core';
import { TalleresService } from 'src/app/servicios/talleres.service';
import { Taller } from 'src/app/modelos/taller'
@Component({
  selector: 'app-talleres',
  templateUrl: './talleres.component.html',
  styleUrls: ['./talleres.component.css']
})
export class TalleresComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
