import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AnimalListComponent } from './components/animal-list/animal-list.component';


@NgModule({
  declarations: [
    HomeComponent,
    AnimalListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
