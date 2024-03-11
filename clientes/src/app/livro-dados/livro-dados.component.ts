import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';


@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {
  livro: Livro = new Livro();
  autoresForm: string = '';
  editoras: Editora[] = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Assumindo que getEditoras retorna um array de Editora[]
    this.editoras = this.servEditora.getEditoras();
  }

  incluir(): void {
    this.livro.autor = this.autoresForm.split('\n');
    this.servLivros.incluir(this.livro)
      .subscribe(() => {
        this.router.navigateByUrl('/lista');
      });
  }
}
