import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../../modules/material.module';
import { HomeComponent } from './home.component';
import { HomeRoute } from './home.routes';

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoute, CommonModule, MaterialModule, RouterModule],
  exports: [],
})
export class HomeModule {}
