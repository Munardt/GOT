import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { HomeRoute } from 'src/app/pages/home/home.routes';
import { MaterialModule } from 'src/app/shared/modules/material.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoute, CommonModule, MaterialModule, RouterModule],
  exports: [],
})
export class HomeModule {}
