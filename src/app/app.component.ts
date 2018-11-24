import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gastos';
  lista = [];
  @Input() variavel;

  showAlert() {
    console.log(this.variavel);
  }
}
