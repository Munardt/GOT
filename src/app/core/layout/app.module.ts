import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RoutingModule } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from '../components/header/header.module';

@NgModule({
  declarations: [AppComponent],
  imports: [RoutingModule, CommonModule, BrowserAnimationsModule, HeaderModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
