import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
//     {
//       conteudo: "Passo informações para componente filho",
//       autoria: "Componente Pai",
//       modelo: "modelo3"
//     },
//     {
//       conteudo: "Minha propriedade é decorado com @input",
//       autoria: "Componente Filho",
//       modelo: "modelo3"
//     }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
