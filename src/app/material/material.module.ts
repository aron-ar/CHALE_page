import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatIconModule, MatButtonModule, MatExpansionModule],
  exports: [CommonModule, MatIconModule, MatButtonModule, MatExpansionModule],
})
export class MaterialModule {}
