import { Component, OnInit } from '@angular/core';

import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css'],
})
export class ExemplosPipesComponent implements OnInit {
  livro: any = {
    titulo: 'learning Javascript Data Structures and Algorithms',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 9, 23),
    url: 'http://a.co/glqjpRP',
  };

  livros: string[] = ['Java', 'TypeScript', 'Angular'];

  filtro: string;

  obterCursos() {
    if (
      this.livros.length === 0 ||
      this.filtro === undefined ||
      this.filtro.trim() === ''
    ) {
      return this.livros;
    }
    return this.livros.filter((v) => {
      if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }

  valorAsync = new Promise((resolve, reject) =>{
    setTimeout(() => resolve('Valor assíncrono'), 2000) 
  });

  valorAsync2 = interval(2000).pipe(map(valor => 'valor assíncrono 2'));

  constructor() {}

  ngOnInit(): void {}

  addCurso(valor): void {
    this.livros.push(valor);
    console.log(this.livros);
  }
}
