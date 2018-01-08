import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TotalSpendsPage } from './total-spends';

@NgModule({
  declarations: [
    TotalSpendsPage,
  ],
  imports: [
    IonicPageModule.forChild(TotalSpendsPage),
  ],
})
export class TotalSpendsPageModule {}
