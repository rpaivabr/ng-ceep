import { Component, OnInit } from '@angular/core';
import * as Pubsub from 'pubsub-js'

@Component({
  selector: 'ceep-form-novo-cartao',
  templateUrl: './form-novo-cartao.component.html',
  styleUrls: ['./form-novo-cartao.component.css']
})
export class FormNovoCartaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  salvar(event) {
    event.preventDefault()
    const conteudo = event.target[0].value
    Pubsub.publish('NOVO_CARTAO', { conteudo: conteudo })
  }

}
