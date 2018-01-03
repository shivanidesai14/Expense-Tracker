import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpendsNotePage } from './spends-note';

@NgModule({
  declarations: [
    SpendsNotePage,
  ],
  imports: [
    IonicPageModule.forChild(SpendsNotePage),
  ],
})
export class SpendsNotePageModule {}
