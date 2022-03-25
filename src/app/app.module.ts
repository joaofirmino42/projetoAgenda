import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from "ngx-pagination";
import { ChartModule } from "angular-highcharts";

import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { CadastroTarefasComponent } from './cadastro-tarefas/cadastro-tarefas.component';
import { ConsultaTarefasComponent } from './consulta-tarefas/consulta-tarefas.component';
import { EdicaoTarefasComponent } from './edicao-tarefas/edicao-tarefas.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    CadastroTarefasComponent,
    ConsultaTarefasComponent,
    EdicaoTarefasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //adicionando o modulo de rotas
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
