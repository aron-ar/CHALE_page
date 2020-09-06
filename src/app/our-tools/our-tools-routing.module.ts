import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurToolsComponent } from './components/our-tools/our-tools.component';
import { AllToolsComponent } from './components/all-tools/all-tools.component';

const routes: Routes = [
  {
    path: '',
    component: AllToolsComponent,
  },
  {
    path: 'our-tools',
    component: OurToolsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurToolsRoutingModule {}
