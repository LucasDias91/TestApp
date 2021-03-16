import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  treinoAdd(){
    window.alert("Abrir novo treino")
  }

  continuarTreino(){
    window.alert("Continuar treinando...")
  }

   open(msg: string){
    window.alert("Abrindo " + msg)
   }

}
