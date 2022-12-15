import { Livro } from './livro.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  baseUrl: String = environment.baseUrl


  constructor(private http: HttpClient) { }
  findAllBycategoria(id_cat:String):Observable<Livro[]>{
    const url =`${this.baseUrl}/livros?Categoria=${id_cat}`;
   return this.http.get<Livro[]>(url);
  }
}
