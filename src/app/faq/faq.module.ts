import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './components/faq/faq.component';

import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [FaqComponent],
  imports: [CommonModule, FaqRoutingModule, MaterialModule],
})
export class FaqModule {}
