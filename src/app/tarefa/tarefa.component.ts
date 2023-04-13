import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  listaTarefas: any[] = []

  constructor() { }

  ngOnInit(): void {
    this.listaTarefas = [
      { id: 0, nome: 'lavar o carro', concluida: false },
      { id: 1, nome: 'ir ao mercado', concluida: true },
      { id: 2, nome: 'lavar roupas', concluida: false },
      { id: 3, nome: 'carregar o telefone', concluida: true },
    ]
  }

  adicionar(nomeTarefa: string) {
    if (nomeTarefa.trim().length == 0) {
      return;
    }

    const tarefaEncontrada = this.listaTarefas.find(item => item.nome.toLowerCase() == nomeTarefa.toLowerCase())

    if (!tarefaEncontrada) {
      this.listaTarefas.push({ id: this.listaTarefas.length, nome: nomeTarefa, concluida: false })
    }

  }

}
