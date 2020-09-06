import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurToolsRoutingModule } from './our-tools-routing.module';
import { OurToolsComponent } from './components/our-tools/our-tools.component';
import { CarouselToolsComponent } from './components/carousel-tools/carousel-tools.component';
import { AllToolsComponent } from './components/all-tools/all-tools.component';

@NgModule({
  declarations: [OurToolsComponent, CarouselToolsComponent, AllToolsComponent],
  imports: [CommonModule, OurToolsRoutingModule],
})
export class OurToolsModule {}
