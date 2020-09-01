import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuestro-equipo',
  templateUrl: './nuestro-equipo.component.html',
  styleUrls: ['./nuestro-equipo.component.css'],
})
export class NuestroEquipoComponent implements OnInit {
  equipo = [
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
