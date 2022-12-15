import { Categoria } from './../categoria.model';
import { CategoriaService } from './../categoria.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-read',
  templateUrl:'./categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})

export class CategoriaReadComponent implements OnInit {
 
  categorias: Categoria[]=[];
  displayedColumns: string[] = ['id', 'nome', 'descricao', 'livros', 'acao'];

  constructor(private service: CategoriaService, private router: Router){}
  ngOnInit(): void {
    this.findAll();
  }
  findAll(){
    this.service.findAll().subscribe(resposta=>{
      //console.log(resposta);
      this.categorias=resposta;
    })
  }
  navegarParaCategoria(){
    this.router.navigate(["categorias/create"])
  }
  
  
}
