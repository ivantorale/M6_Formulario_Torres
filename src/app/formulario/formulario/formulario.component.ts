import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicioService } from 'src/app/servicio.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

  nombresinvalidos(campo: FormControl){
    if (campo.value ==='Ivan' || campo.value ==='ivan') {return {nombreincorrecto: true};}
    else{return null;}
  }

  fecha: FormControl = new FormControl('', Validators.required);
  numcliente: FormControl = new FormControl('', Validators.required);
  dni: FormControl = new FormControl('', Validators.required);
  email: FormControl = new FormControl('', [Validators.required,Validators.pattern(/^\S+@\S+\.\S+$/)]);
  nombre: FormControl = new FormControl('', [this.nombresinvalidos,Validators.required]);
  apellido: FormControl = new FormControl('', [Validators.minLength(3), Validators.maxLength(15)]);
  apellidoDos: FormControl = new FormControl('');
  edad: FormControl = new FormControl('', Validators.required);
  numasiento: FormControl = new FormControl('', Validators.required);
  genero: FormControl = new FormControl('', Validators.required);
  poblacion: FormControl = new FormControl('', Validators.required);
  direccion: FormControl = new FormControl('', Validators.required);
  privacidad: FormControl = new FormControl('', Validators.required);

  MyNewForm: FormGroup = new FormGroup({
  fecha: this.fecha,
  numcliente: this.numcliente,
  dni: this.dni,
  nombre: this.nombre,
  apellido: this.apellido,
  apellidoDos: this.apellidoDos,
  email: this.email,
  edad: this.edad,
  numasiento: this.numasiento,
  genero: this.genero,
  poblacion: this.poblacion,
  direccion: this.direccion,
  privacidad: this.privacidad
  });
  constructor(private Service:ServicioService) {}
  ngOnInit(): void {}
  user: User[] = [];
  enviado = ""
  Clic(datos: FormGroup) {
    this.Service.sendUser(datos);
    console.log(this.user);
    this.enviado = "Se ha enviado correctamente"
  }
  
}
export interface User{
  fecha: Date
  numcliente: number,
  dni: string,
  nombre: string,
  apellido: string,
  apellidoDos: string,
  email: string,
  edad: number,
  numasiento: number,
  genero: string,
  poblacion: string,
  direccion: string,
  privacidad: string
}

