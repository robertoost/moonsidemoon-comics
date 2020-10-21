import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { SharedModule } from './shared/shared.module'
import { PagesModule } from './pages/pages.module';
@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
  ],
  imports: [
    SharedModule,
    PagesModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
