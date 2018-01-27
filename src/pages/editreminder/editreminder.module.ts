import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditreminderPage } from './editreminder';

@NgModule({
  declarations: [
    EditreminderPage,
  ],
  imports: [
    IonicPageModule.forChild(EditreminderPage),
  ],
})
export class EditreminderPageModule {}
