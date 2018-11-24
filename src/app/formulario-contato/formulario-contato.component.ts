import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formulario-contato',
  templateUrl: './formulario-contato.component.html',
  styleUrls: ['./formulario-contato.component.css']
})
export class FormularioContatoComponent implements OnInit {

  @Input() variavel;
  constructor() { }

  ngOnInit() {
    alert('forms started');
  }

}
