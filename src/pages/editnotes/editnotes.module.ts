import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditnotesPage } from './editnotes';

@NgModule({
  declarations: [
    EditnotesPage,
  ],
  imports: [
    IonicPageModule.forChild(EditnotesPage),
  ],
})
export class EditnotesPageModule {}
