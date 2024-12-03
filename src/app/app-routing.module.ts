import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAlunoComponent } from './pages/listar-aluno/listar-aluno.component';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';
import { EditarAlunoComponent } from './pages/editar-aluno/editar-aluno.component';
import { CriarAlunoComponent } from './pages/criar-aluno/criar-aluno.component';
import { VerAlunoComponent } from './pages/ver-aluno/ver-aluno.component';

const routes: Routes = [
  { path: '', redirectTo: 'paginaInicial', pathMatch: 'full' },
  { path: 'paginaInicial', component: PaginaInicialComponent },
  { path: 'listarAluno', component: ListarAlunoComponent },
  { path: 'editarAluno', component: EditarAlunoComponent },
  { path: 'criarAluno', component: CriarAlunoComponent },
  { path: 'verAluno/:id', component: VerAlunoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
