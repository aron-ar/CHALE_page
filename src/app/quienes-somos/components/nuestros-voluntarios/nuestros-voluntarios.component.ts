import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuestros-voluntarios',
  templateUrl: './nuestros-voluntarios.component.html',
  styleUrls: ['./nuestros-voluntarios.component.css'],
})
export class NuestrosVoluntariosComponent implements OnInit {
  voluntarios = [
    {
      imagen: './../../../../assets/images/logocolor.png',
      nombre: 'Jhoel Cuno',
      descripcion: 'presidente de la organización',
    },
    {
      imagen: './../../../../assets/images/logocolor.png',
      nombre: 'Percy Miranda',
      descripcion: 'Director de operaciones',
    },
    {
      imagen: './../../../../assets/images/logocolor.png',
      nombre: 'Angie Salas',
      descripcion: 'Directora de talento humano',
    },
    {
      imagen: './../../../../assets/images/logocolor.png',
      nombre: 'Treyci Pastrana',
      descripcion: 'Directora de logística y finanzas',
    },
    {
      imagen: './../../../../assets/images/logocolor.png',
      nombre: 'Maribel Villaroel',
      descripcion: 'Directora de marketing',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
