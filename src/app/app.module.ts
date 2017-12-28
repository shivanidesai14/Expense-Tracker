import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { HomePage } from '../pages/home/home';
import { DemoPage } from '../pages/demo/demo';
import { PopoverPage } from "../pages/popover/popover";
import { PopoverNotePage } from "../pages/popover-note/popover-note";
import { SpendsPage } from "../pages/spends/spends";
import { LoginPage } from "../pages/login/login";
import {  SignupPage} from "../pages/signup/signup";
import { NewnotePage } from "../pages/newnote/newnote";
import { AddnewnotePage } from "../pages/addnewnote/addnewnote";
import { GraphPage } from "../pages/graph/graph";
import { RecurringPage } from "../pages/recurring/recurring";
import { OnetimePage } from "../pages/onetime/onetime";
import { SelectcatPage } from "../pages/selectcat/selectcat";
import { FrequentPage } from "../pages/frequent/frequent";
import { EdocumentPage } from "../pages/edocument/edocument";
import { EditnotesPage } from "../pages/editnotes/editnotes";
import { NotesdbProvider } from '../providers/notesdb/notesdb';
import { UserdbProvider } from '../providers/userdb/userdb';
import { LogindbProvider } from '../providers/logindb/logindb';
import { Signup1dbProvider } from '../providers/signup1db/signup1db';
import { CatsubcatdbProvider } from '../providers/catsubcatdb/catsubcatdb';
import { CategorydbProvider } from '../providers/categorydb/categorydb';
import { SubcategorydbProvider } from '../providers/subcategorydb/subcategorydb';




@NgModule({
  declarations: [
    MyApp,
    SelectcatPage,HomePage,DemoPage,PopoverPage,SpendsPage,LoginPage,SignupPage,NewnotePage,AddnewnotePage,GraphPage,FrequentPage,RecurringPage,OnetimePage,EdocumentPage,PopoverNotePage,EditnotesPage
  ],
  imports: [
    BrowserModule,HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,DemoPage,PopoverPage,SpendsPage,
    LoginPage,SignupPage,NewnotePage,AddnewnotePage,
    GraphPage,FrequentPage,RecurringPage,OnetimePage,
    SelectcatPage, EdocumentPage,PopoverNotePage,EditnotesPage,
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NotesdbProvider,
    UserdbProvider,
    LogindbProvider,
    Signup1dbProvider,
    CatsubcatdbProvider,
    CategorydbProvider,
    SubcategorydbProvider
  ]
})
export class AppModule {}
