import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com.br/400/200/';
  cliques = 0;
  valorAtual: string = '';
  valorSalvo: any;
  isMouseOver: boolean = false;
  nomeDoCurso: string = 'Angular 12';

  valorInicial = 15;

  getCurtirCurso() {
    return true;
  }

  getValor() {
    return 5;
  }

  botaoClicado() {
    this.cliques = this.cliques + 1;
    alert('Botão Clicado  ' + this.cliques);
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: any){
    console.log(valor);
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento: any){
    console.log(evento.novoValor);
  }

  constructor() {}

  ngOnInit(): void {}
}
