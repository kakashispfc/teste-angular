import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gastos';
  lista = [];
  variavel;

  showAlert() {
    alert(this.variavel);
    console.log(this.variavel);
  }
}
