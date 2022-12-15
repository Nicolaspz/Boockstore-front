import { Categoria } from './../categoria.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from './../categoria.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {
categoria: Categoria ={
  id:'',
  nome:'',
  descricao:''

 }

  constructor(private service: CategoriaService, private router: Router, private route: ActivatedRoute){}
  ngOnInit(): void {
    this.categoria.id=this.route.snapshot.paramMap.get('id')!;
    this.findById();
    
  }

  navegarParaLista(){
    this.router.navigate(["categorias"])
  }
  findById():void {
    this.service.findById(this.categoria.id!).subscribe((resposta)=>{
      
      //this.categoria= resposta;
      this.categoria.descricao=resposta.descricao;
      this.categoria.nome=resposta.nome;
      console.log(this.categoria);

    });
  }

}
