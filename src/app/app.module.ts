import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { AppComponent } from './app.component';
import { RoutingModule } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [RoutingModule, CommonModule, BrowserAnimationsModule, HeaderModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
