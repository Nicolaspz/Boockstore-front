import { Livro } from './../livro.model';
import { LivroService } from './../livro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-livro-update',
  templateUrl: './livro-update.component.html',
  styleUrls: ['./livro-update.component.css']
})
export class LivroUpdateComponent {
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
    this.id_cat=this.route.snapshot.paramMap.get('id_cat')!;
    this.Livro.id=this.route.snapshot.paramMap.get('id')!;
    //this.pesquisarLivro();
    //this.findByID();
    
    
  }

  constructor(private router:Router, private route:ActivatedRoute, private service :LivroService){}

  create():void{
   this.service.createLivro(this.Livro,this.id_cat).subscribe((resposta)=>{
    this.router.navigate([`categorias/${this.id_cat}/livros`])
     this.service.mensagem("Livro Criado com Sucesso");
   }, err=>{
    this.router.navigate([`categorias/${this.id_cat}/livros`])
    this.service.mensagem("Ocoreeu um erro ao Salvar Livros");
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
  cancelar():void{
    this.router.navigate([`categorias/${this.id_cat}/livros`]);
  }

  findByID(): void{
    this.service.findById(this.Livro.id!).subscribe((resposta)=>{
      console.log(resposta);
    });
  }
  pesquisarLivro(): void{
    this.service.findById(this.Livro.id!).subscribe((resposta)=>{
        this.Livro.nome_autor=resposta.nome_autor;
        
    });
  }
  update():void{
    this.service.update(this.Livro).subscribe((resposta)=>{
      this.router.navigate([`categorias/${this.id_cat}/livros`]);
      this.service.mensagem("Livro actualizado com sucesso");
    }, err=>{
      this.router.navigate([`categorias/${this.id_cat}/livros`]);
      this.service.mensagem("Erro ao actualizar tenta mais tarde");
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
