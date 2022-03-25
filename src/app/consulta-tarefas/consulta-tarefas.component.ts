import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../models/tarefa.model';
import { TarefasService } from '../services/tarefas.service';
@Component({
  selector: 'app-consulta-tarefas',
  templateUrl: './consulta-tarefas.component.html',
  styleUrls: ['./consulta-tarefas.component.css']
})
export class ConsultaTarefasComponent implements OnInit {
  //atributo para guardar as tarefas
  listagem: Tarefa[] = [];
  tarefa: Tarefa = {
    idTarefa: 0, nome: '',
    data: '', hora: '', descricao: '', prioridade: ''
  };
  pagina = 1;
  constructor(
    private tarefasService: TarefasService //inicializando
  ) { }

  ngOnInit(): void {
    //executar a consulta e obter as tarefas cadastradas
    this.listagem = this.tarefasService.consultar();
  }
  //função para realizar a paginação do componente
  onPageChange(event: any): void {
    this.pagina = event;
  }
  //função para obter os dados de 1 tarefa através do id
  obterTarefa(id: number): void {
    //alert(id);
    this.tarefa = this.tarefasService.obterPorId(id);
  }
  //função para realizar a exclusão da tarefa
  excluirTarefa(): void {
    this.tarefasService.excluir(this.tarefa); //excluindo...
    this.ngOnInit(); //recarregar a consulta..
  }
}
