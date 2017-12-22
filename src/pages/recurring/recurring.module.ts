import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecurringPage } from './recurring';

@NgModule({
  declarations: [
    RecurringPage,
  ],
  imports: [
    IonicPageModule.forChild(RecurringPage),
  ],
})
export class RecurringPageModule {}
