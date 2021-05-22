import { Injectable } from '@angular/core';
import { ReplaySubject,Observable } from 'rxjs';
import { Nota } from '../interfaces/nota';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

//exportar a Json cada vez que se actualiza notasFuente (clase php y demas)
// getraw value + json.stringify
export class NotasServiceService {

  notasFuente = new ReplaySubject<Nota[]>();

  avisoNota$ = this.notasFuente.asObservable();
  
  storageN: Nota[] = []; //Notas
  contador:number = 0;
  url = "http://localhost:8080/cuartaEvaluacion/backend/"
  
  constructor(private http:HttpClient) { }

  consultarNotas(){
    return this.http.get(`${this.url}backend.php`);
  }

  enviarNotas():Observable<any>{
    return this.http.post(`${this.url}backend.php`,JSON.stringify(this.storageN));
  }

  actualizacionNota(nuevo:FormData){
    let nota = this.convert(nuevo); 
    this.storageN.push(nota);
    if(this.contador > 0)
      this.storageN = this.storageN.slice(-(this.contador+1)); //resetea el array para evitar duplicados  
    this.contador++; //cuenta la cantidad de notas que se han añadido hasta el momento
    this.enviarNotas();
    this.notasFuente.next(this.storageN);
  }

  edicionNota(nuevo:FormData,old:Nota){
    let nota = this.convert(nuevo); 
    this.storageN.forEach((value,index)=>{if(value.titulo==old.titulo) this.storageN[index] = nota;})
    this.notasFuente.next(this.storageN);
  }

  getData():Observable<Nota[]>{
    return this.avisoNota$;
  }

  deleteData(aux:Nota):Observable<Nota[]>{
    if(this.storageN.indexOf(aux) >= 0){
      this.storageN.splice(this.storageN.indexOf(aux),1);
    }  
    this.notasFuente.next(this.storageN);
    return this.avisoNota$;
  }

  convert(conv:FormData):Nota{
    let auxConverter:any;
    let notaAux:Nota = {titulo: "",estado: 0, desc:""};
    auxConverter = JSON.stringify(conv); //De formdata a JSON
    auxConverter = JSON.parse(auxConverter); //De JSON a obj generico
    let {Titulo} = auxConverter; //Extraer valores
    let {Estado} = auxConverter;
    let {Descripcion} = auxConverter;
    notaAux.titulo = Titulo; //Copiar valores a componente para usarlos, todo lo de arriba 
      //conviene que se ponga en notasService mas que en el componente.
    notaAux.estado = Estado;
    notaAux.desc = Descripcion;
    return notaAux;
  }
}
