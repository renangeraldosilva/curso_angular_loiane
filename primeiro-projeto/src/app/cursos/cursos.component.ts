import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: string[];

  constructor(private cursosServices: CursosService) { 
    this.nomePortal = 'http://loiane.training';

    this.cursos = this.cursosServices.getCursos();
  }

  ngOnInit(): void {
  }

}
