import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../../service/aluno.service';

@Component({
  selector: 'app-ver-aluno',
  templateUrl: './ver-aluno.component.html',
  styleUrl: './ver-aluno.component.scss',
})
export class VerAlunoComponent {
  aluno: any;
  erroAluno: boolean = false;

  constructor(
    private alunosService: AlunoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.alunosService.getAlunoById(id).subscribe(
      (data) => {
        this.aluno = data;
      },
      (error) => {
        this.erroAluno = true;
      }
    );
  }
}
