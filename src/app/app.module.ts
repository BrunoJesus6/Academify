import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';
import { EditarAlunoComponent } from './pages/editar-aluno/editar-aluno.component';
import { ListarAlunoComponent } from './pages/listar-aluno/listar-aluno.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CriarAlunoComponent } from './pages/criar-aluno/criar-aluno.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { VerAlunoComponent } from './pages/ver-aluno/ver-aluno.component';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    EditarAlunoComponent,
    ListarAlunoComponent,
    NavbarComponent,
    CriarAlunoComponent,
    VerAlunoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    FormsModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
