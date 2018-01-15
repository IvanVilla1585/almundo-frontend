import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {HotelsComponent} from './components/hotels/hotels.component';
import { HeaderComponent } from './common/header/header.component';
import { IconStarComponent } from './common/icon-star/icon-star.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HotelsRoutingModule} from './components/hotels/hotels-routing.module';
import { IconSearchComponent } from './common/icon-search/icon-search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HotelsComponent,
    IconStarComponent,
    IconSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HotelsRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
