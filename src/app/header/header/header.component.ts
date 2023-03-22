import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
   titulo = {
    'color':'#f2f2f2',
    'font-size':'50px',
    'float':'left',
    'margin-top': '65px'
   } ;
   
tamano(){
  
  let grande = document.getElementById("grande") as HTMLInputElement;
  let standar = document.getElementById("standar") as HTMLInputElement;
  let pequeno = document.getElementById("pequeno") as HTMLInputElement;

  if(grande.checked){
    this.titulo = {
    'color':'#f2f2f2',
    'font-size':'150px',
    'float':'left',
    'margin-top': '65px'
    }
  }else if(standar.checked){
    this.titulo = {
      'color':'#f2f2f2',
      'font-size':'50px',
      'float':'left',
      'margin-top': '65px'
      }
  }else if(pequeno.checked){
    this.titulo = {
      'color':'#f2f2f2',
      'font-size':'20px',
      'float':'left',
      'margin-top': '65px'
      }
  }

}
imageSrc = 'assets/img/esudo.png'
}
