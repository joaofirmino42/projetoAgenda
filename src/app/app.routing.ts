import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//importar os componentes
import { PaginaInicialComponent } from "./pagina-inicial/pagina-inicial.component";
import { CadastroTarefasComponent } from "./cadastro-tarefas/cadastro-tarefas.component";
import { ConsultaTarefasComponent } from "./consulta-tarefas/consulta-tarefas.component";
import { EdicaoTarefasComponent } from "./edicao-tarefas/edicao-tarefas.component";

//mapemaento de rotas para cada componente

const routes: Routes = [
    { path: '', component: PaginaInicialComponent },
    { path: 'cadastro-tarefas', component: CadastroTarefasComponent },
    { path: 'consulta-tarefas', component: ConsultaTarefasComponent },
    { path: 'edicao-tarefas/:id', component: EdicaoTarefasComponent }
];

//registar o mapeamento para que seja incluido no app.module

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
//gerando uma clase para exportar toda a configuração
export class AppRoutingModule { }