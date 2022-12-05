import { Categoria } from './categoria.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class CategoriaService {

  baseUrl:String =environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll():Observable<Categoria[]>{
    const url =`${this.baseUrl}/categorias`;
    return this.http.get<Categoria[]>(url);

}
}