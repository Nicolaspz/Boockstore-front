import { LivroReadAllComponent } from './components/views/livro/livro-read-all/livro-read-all.component';
import { CategoriaUpdateComponent } from './components/views/categoria/categoria-update/categoria-update.component';

import { CategoriaReadComponent } from './components/views/categoria/categoria-read/categoria-read.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/views/home/home.component";
import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';
import { CategoriaDeleteComponent } from './components/views/categoria/categoria-delete/categoria-delete.component';
import { LivroCreateComponent } from './components/views/livro/livro-create/livro-create.component';
const routes:Routes=[
    {path:'', component:HomeComponent},
    {path:'categorias', component:CategoriaReadComponent},
    {path:'categorias/create', component:CategoriaCreateComponent},
    {path:'categorias/delete/:id', component:CategoriaDeleteComponent},
    {path:'categorias/update/:id', component:CategoriaUpdateComponent},
    {path:'categorias/:id/livros', component:LivroReadAllComponent},
    {path:'categorias/:id/livros/create', component:LivroCreateComponent}
]
@NgModule({
    declarations:[],
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}