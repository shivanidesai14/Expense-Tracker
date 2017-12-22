import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpendsPage } from './spends';

@NgModule({
  declarations: [
    SpendsPage,
  ],
  imports: [
    IonicPageModule.forChild(SpendsPage),
  ],
})
export class SpendsPageModule {}
