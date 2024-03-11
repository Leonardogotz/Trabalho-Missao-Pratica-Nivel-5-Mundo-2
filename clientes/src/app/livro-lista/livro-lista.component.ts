import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {
  livros: Livro[] = [];

  constructor(private controleLivrosService: ControleLivrosService) { }

  ngOnInit(): void {
    this.controleLivrosService.obterLivros()
      .subscribe(livros => this.livros = livros);
  }

  obterNome(codEditora?: number): string {
    if (codEditora !== undefined) {
      // Lógica para obter o nome da editora com o código codEditora
      return 'Nome da Editora';
    } else {
      return '';
    }
  }
  excluir(codigo: string): void {
    this.controleLivrosService.excluir(codigo)
      .subscribe(() => {
        this.controleLivrosService.obterLivros()
          .subscribe(livros => this.livros = livros);
      });
  }
}
