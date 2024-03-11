import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';

const routes: Routes = [
  { path: 'lista', component: LivroListaComponent }, // Rota para o componente LivroListaComponent
  { path: 'dados', component: LivroDadosComponent }, // Rota para o componente LivroDadosComponent
  { path: '', redirectTo: '/lista', pathMatch: 'full' } // Rota padrão redirecionando para "lista"
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
