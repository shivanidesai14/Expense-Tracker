import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddnewnotePage } from './addnewnote';

@NgModule({
  declarations: [
    AddnewnotePage,
  ],
  imports: [
    IonicPageModule.forChild(AddnewnotePage),
  ],
})
export class AddnewnotePageModule {}
