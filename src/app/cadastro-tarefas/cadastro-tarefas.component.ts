import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Tarefa } from '../models/tarefa.model';
import { TarefasService } from '../services/tarefas.service';
@Component({
  selector: 'app-cadastro-tarefas',
  templateUrl: './cadastro-tarefas.component.html',
  styleUrls: ['./cadastro-tarefas.component.css']
})
export class CadastroTarefasComponent implements OnInit {
  //atributo
  mensagem: string = "";
  //utilizando o método construtor do componente
  //para inicializar a classe tarefas.service (Injeção de dependencia)
  constructor(
    private tarefasService: TarefasService // inicialização
  ) { }

  ngOnInit(): void {
  }
  //declarando o conteudo do formulário
  formCadastro = new FormGroup({
    //declarando os campos do formulário
    nome: new FormControl('', [Validators.required, Validators.minLength(6)]),
    data: new FormControl('', [Validators.required]),
    hora: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required, Validators.minLength(10)]),
    prioridade: new FormControl('', [Validators.required])
  });
  //função para exibir na página as mensagens de validação de cada campo
  //permitindo acessar as propriedades de cada campo dor formulário
  get form(): any {
    return this.formCadastro.controls;
  }
  //função para processar o SUBMIT do formulário
  onSubmit(): void {
    //capturar os dados do formulario e armazenar na model
    const tarefa: Tarefa = {
      idTarefa: this.tarefasService.gerarId(),
      nome: this.formCadastro.value.nome,
      data: this.formCadastro.value.data,
      hora: this.formCadastro.value.hora,
      descricao: this.formCadastro.value.descricao,
      prioridade: this.formCadastro.value.prioridade
    };
    //cadastrar a tarefa
    this.tarefasService.cadastrar(tarefa);

    //imprimindo no console do navegador
    console.log(this.formCadastro.value);
    //exibir a mensagem na página
    this.mensagem = "Tarefa cadastrada com sucesso.";
    //limpar os campos do formulário
    this.formCadastro.reset();
  }
  //função para limpar a mensagem
  clear(): void {
    this.mensagem = "";
  }
}
