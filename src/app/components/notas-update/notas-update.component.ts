import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Nota } from '../../interfaces/nota';
import { NotasServiceService } from '../../services/notas-service.service';

interface estado{
  view:String;
  value:Number;
}

@Component({
  selector: 'app-notas-update',
  templateUrl: './notas-update.component.html',
  styleUrls: ['./notas-update.component.scss']
})


export class NotasUpdateComponent implements OnInit {

  oldNota:Nota = {titulo: "",estado: 0, desc:""}

  estados:estado[]=[
    {view: "Abierto", value: 0},
    {view: "En progreso", value: 1},
    {view: "Cerrado", value: 2}
  ];

  titleBind!:string;
  descBind!:string;
  estateBind!:number;

  subscripcion;

  formulario:FormGroup;
  constructor(public form:FormBuilder, private servicioNotas:NotasServiceService, private route:ActivatedRoute) { 
      this.formulario = this.form.group({
        Titulo:[''],
        Estado:[''],
        Descripcion:['',Validators.maxLength(150)]
      });
      this.subscripcion = this.route.paramMap.subscribe(params =>{
        this.oldNota.titulo = params.get("id");
      }); 
  }

  ngOnInit(): void {
  }

  crear(){
    let nota = this.formulario.value;
    this.servicioNotas.edicionNota(nota,this.oldNota);
  }

}
