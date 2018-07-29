import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ExamHelpPage } from '../pages/exam-help/exam-help';
import { ReadyToStudyPage } from '../pages/ready-to-study/ready-to-study';
import { ExamTimePage } from '../pages/exam-time/exam-time';
import { PostResultStressPage } from '../pages/post-result-stress/post-result-stress';
import { YouTubeLinksPage } from '../pages/you-tube-links/you-tube-links';
import { SymptomsOfExamStressPage } from '../pages/symptoms-of-exam-stress/symptoms-of-exam-stress';
import { TimeManagementTipsPage } from '../pages/time-management-tips/time-management-tips';
import { HeaderMenuComponent } from '../components/header-menu/header-menu';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ExamHelpPage,
    ReadyToStudyPage,
    ExamTimePage,
    PostResultStressPage,
    YouTubeLinksPage,
    SymptomsOfExamStressPage,
    TimeManagementTipsPage,
    HeaderMenuComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ExamHelpPage,
    ReadyToStudyPage,
    ExamTimePage,
    PostResultStressPage,
    YouTubeLinksPage,
    SymptomsOfExamStressPage,
    TimeManagementTipsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
