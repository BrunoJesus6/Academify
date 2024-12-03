import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlunoService } from '../../service/aluno.service';

@Component({
  selector: 'app-criar-aluno',
  templateUrl: './criar-aluno.component.html',
  styleUrl: './criar-aluno.component.scss',
})
export class CriarAlunoComponent {
  aluno: any = {
    id: null,
    matricula: '',
    nome: '',
    nascimento: '',
    dataHoraCadastro: new Date(),
  };

  constructor(private alunosService: AlunoService, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { aluno: any };
    if (state && state.aluno) {
      this.aluno = state.aluno;
    }
  }

  ngOnInit(): void {}

  criarAluno() {
    this.aluno.dataHoraCadastro = new Date();
    this.alunosService.addAluno(this.aluno).subscribe(
      () => {
        alert('Aluno criado com sucesso!');
        this.router.navigate(['/listarAluno']);
      },
      (error) => {
        console.error('Erro ao criar aluno:', error);
        alert('Erro ao criar aluno.');
      }
    );
  }

  cancelar() {
    this.router.navigate(['/listarAluno']);
  }
}
