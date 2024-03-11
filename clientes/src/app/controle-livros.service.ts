import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Livro } from './livro';

// Defina a constante global baseURL
const baseURL = 'http://localhost:3030/livros';

// Defina a interface LivroMongo
interface LivroMongo {
  _id?: string | undefined;
  codigo?: string;
  codEditora?: number;
  titulo?: string;
  resumo?: string;
  autor?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {

  constructor(private http: HttpClient) { }

  obterLivros(): Observable<Livro[]> {
    return this.http.get<LivroMongo[]>(baseURL)
      .pipe(
        map((livrosMongo: LivroMongo[]) => {
          return livrosMongo.map(livroMongo => {
            return {
              codigo: livroMongo.codigo,
              codEditora: livroMongo.codEditora,
              titulo: livroMongo.titulo,
              autor: livroMongo.autor,
              resumo: livroMongo.resumo
            };
          });
        })
      );
  }

  excluir(codigo: string): Observable<boolean> {
    return this.http.delete<boolean>(`${baseURL}/${codigo}`);
  }

  incluir(livro: Livro): Observable<boolean> {
    const livroMongo: LivroMongo = {
      codigo: livro.codigo,
      codEditora: livro.codEditora,
      titulo: livro.titulo,
      autor: livro.autor,
      resumo: livro.resumo
    };
    return this.http.post<boolean>(baseURL, livroMongo);
  }
}
