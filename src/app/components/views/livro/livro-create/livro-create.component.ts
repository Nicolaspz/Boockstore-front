import { Livro } from './../livro.model';
import { LivroService } from './../livro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css']
})
export class LivroCreateComponent implements OnInit {
  id_cat:String=''
  titulo = new FormControl('', [Validators.minLength(3)])
  nome_autor = new FormControl('', [Validators.minLength(6)])
  texto = new FormControl('', [Validators.minLength(20)])
  Livro:Livro={
    titulo: '',
    nome_autor: '',
    texto: ''
    
  }

  ngOnInit(): void {
    this.id_cat=this.route.snapshot.paramMap.get('id')!;
  }

  constructor(private router:Router, private route:ActivatedRoute, private service :LivroService){}

  create():void{
   this.service.createLivro(this.Livro,this.id_cat).subscribe((resposta)=>{
     this.service.mensagem("Livro Criado com Sucesso");
   }, err=>{
    console.log(err.error.errors.fieldMessage);
   })
  }
  getMessage(){
    if(this.titulo.invalid){
      return "0 campo Título deve conter entre 3 e 100 caracteres"
    }
    if(this.nome_autor.invalid){
      return "0 campo nome deve conter entre 6 e 60 caracteres"
    }
    if(this.texto.invalid){
      return "0 campo texto não pode ter caracteres menor de 20"
    }

    return true;
  }

}
