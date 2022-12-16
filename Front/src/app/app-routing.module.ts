import { TurmaAlunosComponent } from './turma-alunos/turma-alunos.component';
import { AlunosEditarComponent } from './alunos-editar/alunos-editar.component';
import { AlunosListaComponent } from './alunos-lista/alunos-lista.component';
import { TarefaEditarComponent } from './tarefa-editar/tarefa-editar.component';
import { TarefasListaComponent } from './tarefas-lista/tarefas-lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'lista', component: TarefasListaComponent },
  { path: 'editar/:id', component: TarefaEditarComponent },
  { path: 'listaalunos', component: AlunosListaComponent },
  { path: 'editarAluno', component: AlunosEditarComponent },
  { path: 'editarAluno/:id', component: AlunosEditarComponent },
  { path: 'associar', component: TurmaAlunosComponent },
  { path: '**', redirectTo: 'lista' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
