import { Component, OnInit } from '@angular/core'
import * as Pubsub from 'pubsub-js'

@Component({
  selector: 'ceep-mural',
  templateUrl: './mural.component.html',
  styleUrls: ['./mural.component.css']
})
export class MuralComponent implements OnInit {

  cartoes = []

  constructor() { 
    Pubsub.subscribe('NOVO_CARTAO', (channel, dados) => {
      console.log('bla', dados)
      this.cartoes.push(dados)
    })
  }

  ngOnInit() {
    console.log(MuralComponent)
    this.cartoes.push({ conteudo: 'Oi td bem?'})
    this.cartoes.push({ conteudo: 'Bagulhos'})
  }

}
