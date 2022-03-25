import { Injectable } from '@angular/core';
import { Tarefa } from '../models/tarefa.model';
//pode instanciar no constutor
@Injectable({
  providedIn: 'root'
})
export class TarefasService {
  //criando uma lista de tarefa
  tarefas: Tarefa[] = [
    {
      idTarefa: 1, nome: 'Aula de Angular',
      data: '2021-10-01',
      hora: '09:30',
      descricao: 'Aula de desenvolvimento frontend',
      prioridade: '3'
    },
    {
      idTarefa: 2,
      nome: 'Aula de Java',
      data: '2021-10-02',
      hora: '10:30',
      descricao: 'Aula de desenvolvimento Web MVC',
      prioridade: '2'
    },
    {
      idTarefa: 3,
      nome: 'Aula de .NET',
      data: '2021-10-03',
      hora: '13:30',
      descricao: 'Aula de desenvolvimento APIs',
      prioridade: '1'
    },
    {
      idTarefa: 4,
      nome: 'Aula Banco de dados',
      data: '2021-10-04',
      hora: '14:30',
      descricao: 'Aula de modelagem SQL',
      prioridade: '1'
    },
    {
      idTarefa: 5,
      nome: 'Aula de Java Web',
      data: '2021-10-05',
      hora: '15:30',
      descricao: 'Aula JAVA spring MVC',
      prioridade: '1'
    },
  ];
  constructor() { }
  //função para gerar um id para a tarefa 
  gerarId(): number {
    let id = 0;
    this.tarefas.forEach(function (item) {
      if (id < item.idTarefa) {
        id = item.idTarefa;
      }
    });
    return id + 1; //incremento..
  }
  //função para cadastrar uma tarefa
  cadastrar(tarefa: Tarefa): void {
    //adicionando a tarefa na lista
    this.tarefas.push(tarefa);

  }
  //função para excluir  a tarefa
  excluir(tarefa: Tarefa): void {
    //removendo a tarefa da lista
    this.tarefas.splice(this.tarefas.indexOf(tarefa), 1);
  }
  //função para atualizar uma tarefa
  atualizar(tarefa: Tarefa): void {
    //procurar a posição na lista onde está a tarefa
    const position = this.tarefas.findIndex(t => t.idTarefa === tarefa.idTarefa);
    this.tarefas[position] = tarefa;
  }
  //buscar 1 tarefa dentro da listra através do id
  obterPorId(id: number): Tarefa {
    const position = this.tarefas.findIndex(t => t.idTarefa === id);
    //retornanod o registro pela posição
    return this.tarefas[position];
  }
  //função para retornar todas as tarefas cadastradas
  consultar(): Tarefa[] {
    return this.tarefas;
  }
}
