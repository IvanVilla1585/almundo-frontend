import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HotelsComponent} from './hotels.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HotelsComponent],
  exports: [HotelsComponent]
})
export class HotelsModule { }
