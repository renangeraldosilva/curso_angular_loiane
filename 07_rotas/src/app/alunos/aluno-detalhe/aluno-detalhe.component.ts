import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Aluno } from '../aluno';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  aluno!: Aluno;
  inscricao!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private alunosServices: AlunosService,
    private router: Router
    ) { }

  ngOnInit(){
    // this.inscricao = this.route.params.subscribe(
    //   (params: any) => {
    //     let id = params['id'];

    //     this.aluno = this.alunosServices.getAluno(id);
    //   }
    // );

    console.log('ngOnInit: AlunoDetalheComponent');

    this.inscricao = this.route.data.subscribe(
      (info: any) => {
        console.log('Recebendo o objeto Aluno do resolver');
        this.aluno = info.aluno;
      }
    );
  }

  editarContato(): void {
    this.router.navigate(['/alunos',  this.aluno.id, 'editar']);
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
