import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  banner = [
    {
      image: './../../../../assets/images/portada.jpg',
      titulo: 'Solicita tu asesoría gratuita',
      urlBtn: '/home',
    },
    {
      image: './../../../../assets/images/portada.jpg',
      titulo: 'Hazte voluntario',
      urlBtn: '/home',
    },
    {
      image: './../../../../assets/images/portada.jpg',
      titulo: 'Algunas asesorías brindadas por nuestros voluntarios',
      urlBtn: '/home',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
