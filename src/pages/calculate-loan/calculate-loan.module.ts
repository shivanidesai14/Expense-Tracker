import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalculateLoanPage } from './calculate-loan';

@NgModule({
  declarations: [
    CalculateLoanPage,
  ],
  imports: [
    IonicPageModule.forChild(CalculateLoanPage),
  ],
})
export class CalculateLoanPageModule {}
