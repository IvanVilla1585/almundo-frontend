import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HotelsComponent} from './hotels.component';

const routes: Routes = [
  {
    path: 'hotels',
    component: HotelsComponent
  }
];

export const componentsHotelsRoutes = [
  HotelsComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HotelsRoutingModule {}
