export class Livro {
  _id?: string | undefined;
  codigo?: string;
  codEditora?: number;
  titulo?: string;
  resumo?: string;
  autor?: string[];

  constructor(codigo: string = '', codEditora: number = 0, titulo: string = '', resumo: string = '', autores: string[] = []) {
    this.codigo = codigo;
    this.codEditora = codEditora;
    this.titulo = titulo;
    this.resumo = resumo;
    this.autor = autores;
  }
}
