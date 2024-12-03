import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AlunoService, Aluno } from '../../service/aluno.service';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.component.html',
  styleUrls: ['./listar-aluno.component.scss'],
})
export class ListarAlunoComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['matricula', 'nome', 'actions'];
  dataSource = new MatTableDataSource<Aluno>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private alunoService: AlunoService, private router: Router) {}

  ngOnInit(): void {
    this.loadAlunos();

    this.dataSource.filterPredicate = (
      data: Aluno,
      filter: string
    ): boolean => {
      const formattedFilter = filter.trim().toLowerCase();
      return (
        data.matricula?.toLowerCase().includes(formattedFilter) ||
        data.nome?.toLowerCase().includes(formattedFilter)
      );
    };
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  pesquisar(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadAlunos(): void {
    this.alunoService.getAlunos().subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  criarAluno() {
    this.router.navigate(['/criarAluno']);
  }

  editarAluno(aluno: Aluno): void {
    this.router.navigate(['/editarAluno'], { state: { aluno } });
  }

  verAluno(id: number): void {
    this.router.navigate(['/verAluno', id]);
  }

  deletarAluno(id: number): void {
    if (confirm('Deseja realmente excluir este aluno?')) {
      this.alunoService.deleteAluno(id).subscribe(() => this.loadAlunos());
    }
  }
}
