import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SliderComponent } from './landing-page/slider-component/slider-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LandingPageComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
