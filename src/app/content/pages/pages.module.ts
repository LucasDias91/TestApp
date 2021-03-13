import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PagesPageRoutingModule } from './pages-routing.module';
import { PagesPage } from './pages.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PagesPageRoutingModule,
    IonicModule.forRoot(),
  ],
  declarations: [PagesPage]
})
export class PagesPageModule {}
