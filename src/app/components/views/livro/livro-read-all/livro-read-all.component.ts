import { LivroService } from './../livro.service';
import { Livro } from './../livro.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-livro-read-all',
  templateUrl: './livro-read-all.component.html',
  styleUrls: ['./livro-read-all.component.css']
})
export class LivroReadAllComponent implements OnInit {
  livros:Livro[]=[];
  ngOnInit(): void {
    this.id_cat=this.route.snapshot.paramMap.get('id')!;
    this.findAllByCategoria();
  }
  constructor(private route: ActivatedRoute, private service:LivroService){}
  displayedColumns: string[] = ['id', 'titulo', 'livros', 'acao'];
  id_cat:String='';

  findAllByCategoria(){
    this.service.findAllBycategoria( this.id_cat).subscribe((resposta)=>{
      this.livros=resposta;
      //console.log(this.livros);
    });
    
  }
}


