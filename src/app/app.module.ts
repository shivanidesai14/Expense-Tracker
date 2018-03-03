import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { IonicApp, IonicErrorHandler, IonicModule, FabContainer } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing';
import { HomePage } from '../pages/home/home';
import { DemoPage } from '../pages/demo/demo';
import { PopoverPage } from "../pages/popover/popover";
import { PopoverNotePage } from "../pages/popover-note/popover-note";
import { SpendsPage } from "../pages/spends/spends";
import { LoginPage } from "../pages/login/login";
import { SignupPage } from "../pages/signup/signup";
import { NewnotePage } from "../pages/newnote/newnote";
import { AddnewnotePage } from "../pages/addnewnote/addnewnote";
import { GraphPage } from "../pages/graph/graph";
import { RecurringPage } from "../pages/recurring/recurring";
import { OnetimePage } from "../pages/onetime/onetime";
import { SelectcatPage } from "../pages/selectcat/selectcat";
import { FrequentPage } from "../pages/frequent/frequent";
import { EdocumentPage } from "../pages/edocument/edocument";
import { EditnotesPage } from "../pages/editnotes/editnotes";
import { BarChartPage } from "../pages/bar-chart/bar-chart";
import { LineChartPage } from "../pages/line-chart/line-chart";
import { CategoryPage } from "../pages/category/category";
import { TutorialPage } from "../pages/tutorial/tutorial";
import { UserProfilePage } from "../pages/user-profile/user-profile";
import { PopoverSpendPage } from "../pages/popover-spend/popover-spend";
import { PopoverMenuPage } from "../pages/popover-menu/popover-menu";
import { SpendsNotePage } from "../pages/spends-note/spends-note";
import { LoanPage } from "../pages/loan/loan";
import { ReminderPage } from "../pages/reminder/reminder";
import { CalculateLoanPage } from "../pages/calculate-loan/calculate-loan";
import { ViewspendsPage } from "../pages/viewspends/viewspends";
import { EditprofilePage } from "../pages/editprofile/editprofile";
import { ViewCategorySpendsPage } from "../pages/view-category-spends/view-category-spends";
import { PopoverNote1pagePage } from "../pages/popover-note1page/popover-note1page";
import { TotalSpendsPage } from "../pages/total-spends/total-spends";
import { ChangepassPage } from "../pages/changepass/changepass";
import { AddReminderPage } from "../pages/add-reminder/add-reminder";
import { EditreminderPage } from "../pages/editreminder/editreminder";
import { PopoverSpend1Page } from "../pages/popover-spend1/popover-spend1";
import { AddnewcatPage } from "../pages/addnewcat/addnewcat";
import { SelectParCatPage } from "../pages/select-par-cat/select-par-cat";
import { NotesdbProvider } from '../providers/notesdb/notesdb';
import { UserdbProvider } from '../providers/userdb/userdb';
import { LogindbProvider } from '../providers/logindb/logindb';
import { Signup1dbProvider } from '../providers/signup1db/signup1db';
import { CatsubcatdbProvider } from '../providers/catsubcatdb/catsubcatdb';
import { CategorydbProvider } from '../providers/categorydb/categorydb';
import { SubcategorydbProvider } from '../providers/subcategorydb/subcategorydb';
import { SpendsdbProvider } from '../providers/spendsdb/spendsdb';
import { SubcatexpdbProvider } from '../providers/subcatexpdb/subcatexpdb';
import { LoandbProvider } from '../providers/loandb/loandb';
import { ReminderdbProvider } from '../providers/reminderdb/reminderdb';




@NgModule({
  declarations: [
    MyApp,
    SelectcatPage, HomePage, DemoPage, PopoverPage, SpendsPage, LoginPage, SignupPage, NewnotePage,
    AddnewnotePage, GraphPage, FrequentPage, RecurringPage, OnetimePage, EdocumentPage, PopoverNotePage,
    EditnotesPage, CategoryPage, PopoverSpendPage, LineChartPage, BarChartPage, TutorialPage, UserProfilePage,
    SpendsNotePage, LoanPage, CalculateLoanPage, SpendsNotePage, ViewspendsPage, PopoverMenuPage, TotalSpendsPage, ViewCategorySpendsPage, 
    PopoverNote1pagePage, ReminderPage, ChangepassPage,AddReminderPage,EditreminderPage,PopoverSpend1Page,EditprofilePage,AddnewcatPage,
    SelectParCatPage






  ],
  imports: [
    BrowserModule, HttpModule, HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    HomePage, DemoPage, PopoverPage, SpendsPage,
    LoginPage, SignupPage, NewnotePage, AddnewnotePage,
    GraphPage, FrequentPage, RecurringPage, OnetimePage,
    SelectcatPage, EdocumentPage, PopoverNotePage, EditnotesPage,
    CategoryPage, PopoverSpendPage, LineChartPage, BarChartPage, TutorialPage, 
    LoanPage, CalculateLoanPage, UserProfilePage, SpendsNotePage, ViewspendsPage, 
    PopoverMenuPage, TotalSpendsPage, ViewCategorySpendsPage, PopoverNote1pagePage,
     ReminderPage, ChangepassPage,AddReminderPage,EditreminderPage,PopoverSpend1Page,
     EditprofilePage,AddnewcatPage,SelectParCatPage


  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    NotesdbProvider,
    UserdbProvider,
    LogindbProvider,
    Signup1dbProvider,
    CatsubcatdbProvider,
    CategorydbProvider,
    SubcategorydbProvider,
    FabContainer,
    SpendsdbProvider,
    SpendsdbProvider,
     SocialSharing,
    SubcatexpdbProvider,
    LoandbProvider,
    ReminderdbProvider,



  ]
})
export class AppModule { }
