import { Categoria } from './categoria.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})

export class CategoriaService {

  baseUrl:String =environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll():Observable<Categoria[]>{
    const url =`${this.baseUrl}/categorias`;
    return this.http.get<Categoria[]>(url);

}
create(categoria:Categoria):Observable<Categoria>{
  const url =`${this.baseUrl}/categorias`;
  return this.http.post<Categoria>(url,categoria);
}
mensagem(str:String):void{
  this._snack.open(`${str}`, 'OK',{
    horizontalPosition:'end',
    verticalPosition:'top',
    duration:3000
  })
}
findById(id:String):Observable<Categoria>{
  const url =`${this.baseUrl}/categorias/${id}`;
  return this.http.get<Categoria>(url);
}

delete(id:String):Observable<void>{
  const url =`${this.baseUrl}/categorias/${id}`;
  return this.http.delete<void>(url);
}

update(categoria:Categoria, id:String):Observable<Categoria>{
  const url =`${this.baseUrl}/categorias/${id}`;
  return this.http.put<Categoria>(url,categoria);
}


}