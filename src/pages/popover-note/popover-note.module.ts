import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopoverNotePage } from './popover-note';

@NgModule({
  declarations: [
    PopoverNotePage,
  ],
  imports: [
    IonicPageModule.forChild(PopoverNotePage),
  ],
})
export class PopoverNotePageModule {}
