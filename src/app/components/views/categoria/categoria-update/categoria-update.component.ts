import { Categoria } from './../categoria.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css']
})
export class CategoriaUpdateComponent implements OnInit {
  categoria:Categoria={
    id:'',
    nome: '',
    descricao: ''
  }
  constructor(private service: CategoriaService, private router: Router, private route: ActivatedRoute){}
  ngOnInit(): void {
    this.categoria.id=this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById():void {
    this.service.findById(this.categoria.id!).subscribe((resposta)=>{
      
      //this.categoria= resposta;
      this.categoria.descricao=resposta.descricao;
      this.categoria.nome=resposta.nome;
      //console.log(this.categoria);

    });
  }


  navegarParaLista(){
    this.router.navigate(["categorias"])
  }
  update():void {
    this.service.update(this.categoria,this.categoria.id!).subscribe((resp)=>{
      this. navegarParaLista();
      this.service.mensagem("Produto Actualizado com Sucesso")
    },err=>{
      this.service.mensagem("erro ao Actualizar")

    })
  }

}
