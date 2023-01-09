import { Livro } from './../livro.model';
import { LivroService } from './../livro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-livro-delete',
  templateUrl: './livro-delete.component.html',
  styleUrls: ['./livro-delete.component.css']
})
export class LivroDeleteComponent {

  id_cat:String=''
  

  Livro:Livro={
    titulo: '',
    nome_autor: '',
    texto: ''
    }

  ngOnInit(): void {
    this.id_cat=this.route.snapshot.paramMap.get('id_cat')!;
    this.Livro.id=this.route.snapshot.paramMap.get('id')!;
    //this.pesquisarLivro();
    //this.findByID();
    
    
  }

  constructor(private router:Router, private route:ActivatedRoute, private service :LivroService){}

  
  cancelar():void{
    this.router.navigate([`categorias/${this.id_cat}/livros`]);
  }

  findByID(): void{
    this.service.findById(this.Livro.id!).subscribe((resposta)=>{
      console.log(resposta);
    });
  }
  
  
  Eliminar():void{
    this.service.delete(this.Livro.id!).subscribe((resposta)=>{
      this.router.navigate([`categorias/${this.id_cat}/livros`]);
      this.service.mensagem("Livro eliminado com sucesso!!");
    }, err=>{
      this.router.navigate([`categorias/${this.id_cat}/livros`]);
      this.service.mensagem("Erro ao Eliminar tenta mais tarde");
    });
  }
}
