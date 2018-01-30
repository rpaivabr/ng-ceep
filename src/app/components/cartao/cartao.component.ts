import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ceep-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css']
})
export class CartaoComponent implements OnInit {

  @Input() conteudo = ''

  constructor() { }

  ngOnInit() {
  }

}
