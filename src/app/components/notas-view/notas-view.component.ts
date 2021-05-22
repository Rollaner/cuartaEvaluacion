import { Component, OnInit } from '@angular/core';
import { NotasServiceService } from '../../services/notas-service.service';
import { Nota } from '../../interfaces/nota';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notas-view',
  templateUrl: './notas-view.component.html',
  styleUrls: ['./notas-view.component.scss']
})
export class NotasViewComponent implements OnInit {


  notasTest: Nota[] = [

    {titulo: "as",estado: 0, desc:"welp"},
    {titulo: "SAD",estado: 1, desc:"espp"}

  ]

  data:Nota[] = [];
  notas0: Nota[] = [];
  notas1: Nota[] = [];
  notas2: Nota[] = [];
  buttonAux:Nota = {
    titulo: "",estado: 3, desc:""
  };

  constructor(private notasService: NotasServiceService, private router: Router) {
    //convertir de formdata a Nota[] Display de notas con un for e *ngif() (en Html prob)
   }

  ngOnInit(): void {
    this.notasService.getData().subscribe(update =>  {this.data = update}); //Se puede pasar la logica por medio de entrgar un objeto tipo nota
    this.display();
  }

  display(){
    let aux:Nota;
    for (aux of this.data.values()){
      if(aux.estado == 0){  //Demasiada repeticion, como hacerlo mejor?
        if(!this.notas0.includes(aux))
          this.notas0.push(aux);
      }
      if(aux.estado == 1){
        if(!this.notas1.includes(aux))
          this.notas1.push(aux);
      }
      if(aux.estado == 2){
        if(!this.notas2.includes(aux))
          this.notas2.push(aux);
      }
    }
  }

  select(helper:Nota){
    this.buttonAux = helper;
  }

  isValid():boolean{
    if(this.buttonAux.estado < 3)
      return true;
    return false;
  }

  isEditable():boolean{
    if(this.buttonAux.estado < 2)
      return true;
    return false;
  }

  destroy(){
    this.notasService.deleteData(this.buttonAux);
    delete this.data[this.data.indexOf(this.buttonAux)];
    if(this.buttonAux.estado == 0){  //Demasiada repeticion, como hacerlo mejor?
      this.notas0.forEach((value,index)=>{if(value.titulo==this.buttonAux.titulo) this.notas0.splice(index,1);})
    }
    if(this.buttonAux.estado == 1){
      this.notas1.forEach((value,index)=>{if(value.titulo==this.buttonAux.titulo) this.notas1.splice(index,1);})
    }
    if(this.buttonAux.estado == 2){
    this.notas2.forEach((value,index)=>{if(value.titulo==this.buttonAux.titulo) this.notas2.splice(index,1);})
    }
  }

}
