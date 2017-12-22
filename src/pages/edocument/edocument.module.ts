import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EdocumentPage } from './edocument';

@NgModule({
  declarations: [
    EdocumentPage,
  ],
  imports: [
    IonicPageModule.forChild(EdocumentPage),
  ],
})
export class EdocumentPageModule {}
