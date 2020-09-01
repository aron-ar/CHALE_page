import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuienesSomosRoutingModule } from './quienes-somos-routing.module';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { NuestroEquipoComponent } from './components/nuestro-equipo/nuestro-equipo.component';
import { NuestrosVoluntariosComponent } from './components/nuestros-voluntarios/nuestros-voluntarios.component';

@NgModule({
  declarations: [QuienesSomosComponent, NuestroEquipoComponent, NuestrosVoluntariosComponent],
  imports: [CommonModule, QuienesSomosRoutingModule],
})
export class QuienesSomosModule {}
