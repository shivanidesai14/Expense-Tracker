import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
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
import { BarChartPage} from "../pages/bar-chart/bar-chart";
import { LineChartPage } from "../pages/line-chart/line-chart";
import {CategoryPage} from "../pages/category/category";
import { TutorialPage } from "../pages/tutorial/tutorial";
import { UserProfilePage } from "../pages/user-profile/user-profile";
import { NotesdbProvider } from '../providers/notesdb/notesdb';
import { UserdbProvider } from '../providers/userdb/userdb';
import { LogindbProvider } from '../providers/logindb/logindb';
import { Signup1dbProvider } from '../providers/signup1db/signup1db';
import { CatsubcatdbProvider } from '../providers/catsubcatdb/catsubcatdb';
import { CategorydbProvider } from '../providers/categorydb/categorydb';
import { SubcategorydbProvider } from '../providers/subcategorydb/subcategorydb';

import { SpendsdbProvider } from '../providers/spendsdb/spendsdb';
import { PopoverSpendPage } from "../pages/popover-spend/popover-spend";




@NgModule({
  declarations: [
    MyApp,
    SelectcatPage,HomePage,DemoPage,
    PopoverPage,SpendsPage,LoginPage,SignupPage,NewnotePage,
    AddnewnotePage,GraphPage,FrequentPage,RecurringPage,OnetimePage,
    EdocumentPage,PopoverNotePage,EditnotesPage,
    CategoryPage,
    PopoverSpendPage,LineChartPage,BarChartPage,TutorialPage,UserProfilePage

   


  ],
  imports: [
    BrowserModule,HttpModule,HttpClientModule,
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
    CategoryPage,LineChartPage,BarChartPage,TutorialPage,UserProfilePage,
    PopoverSpendPage

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
    SubcategorydbProvider,

    SpendsdbProvider,
    CatsubcatdbProvider,
    CategorydbProvider,
    SubcategorydbProvider,
    SpendsdbProvider


  ]
})
export class AppModule {}
