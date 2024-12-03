import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlunoService } from '../../service/aluno.service';

@Component({
  selector: 'app-editar-aluno',
  templateUrl: './editar-aluno.component.html',
  styleUrls: ['./editar-aluno.component.scss'],
})
export class EditarAlunoComponent {
  aluno: any = {
    id: null,
    matricula: '',
    nome: '',
    nascimento: '',
  };

  constructor(private alunosService: AlunoService, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { aluno: any };
    if (state && state.aluno) {
      this.aluno = state.aluno;
      this.aluno.nascimento = new Date(this.aluno.nascimento)
        .toISOString()
        .split('T')[0];
    }
  }

  ngOnInit(): void {}

  editarAluno() {
    this.alunosService.editAluno(this.aluno.id, this.aluno).subscribe(
      () => {
        alert('Aluno editado com sucesso!');
        this.router.navigate(['/listarAluno']);
      },
      (error) => {
        console.error('Erro ao atualizar evento:', error);
        alert('Erro ao editar aluno.');
      }
    );
  }

  cancelar() {
    this.router.navigate(['/listarAluno']);
  }
}
