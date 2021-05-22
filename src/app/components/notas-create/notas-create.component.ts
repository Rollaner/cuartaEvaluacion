import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { NotasServiceService } from '../../services/notas-service.service';

interface estado{
  view:String;
  value:Number;
}

@Component({
  selector: 'app-notas-create',
  templateUrl: './notas-create.component.html',
  styleUrls: ['./notas-create.component.scss']
})


export class NotasCreateComponent implements OnInit {


  estados:estado[]=[
    {view: "Abierto", value: 0},
    {view: "En progreso", value: 1},
    {view: "Cerrado", value: 2}
  ];

  titleBind!:string;
  descBind!:string;
  estateBind!:number;

  formulario:FormGroup;
  constructor(public form:FormBuilder, private servicioNotas:NotasServiceService) { 
      this.formulario = this.form.group({
        Titulo:[''],
        Estado:[''],
        Descripcion:['',Validators.maxLength(150)]
      });

  }

  ngOnInit(): void {
  }

  crear(){
    let nota = this.formulario.value; 
    this.servicioNotas.actualizacionNota(nota);
  }

}
