import { Component } from '@angular/core';

@Component({
  selector: 'app-livro-read-all',
  templateUrl: './livro-read-all.component.html',
  styleUrls: ['./livro-read-all.component.css']
})
export class LivroReadAllComponent {
  displayedColumns: string[] = ['id', 'titulo', 'livros', 'acao'];

}
