import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnetimePage } from './onetime';

@NgModule({
  declarations: [
    OnetimePage,
  ],
  imports: [
    IonicPageModule.forChild(OnetimePage),
  ],
})
export class OnetimePageModule {}
