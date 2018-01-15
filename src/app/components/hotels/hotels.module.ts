import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsRoutingModule, componentsHotelsRoutes } from './hotels-routing.module';
import {IconStarComponent} from '../../common/icon-star/icon-star.component';
import {HeaderComponent} from '../../common/header/header.component';
import {IconSearchComponent} from '../../common/icon-search/icon-search.component';

@NgModule({
  imports: [
    CommonModule,
    HotelsRoutingModule
  ],
  declarations: [HeaderComponent, IconStarComponent, IconSearchComponent, componentsHotelsRoutes],
  exports: [HeaderComponent, IconStarComponent, IconSearchComponent, componentsHotelsRoutes]
})
export class HotelsModule {}
