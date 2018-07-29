import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReadyToStudyPage } from '../ready-to-study/ready-to-study';
import { ExamTimePage } from '../exam-time/exam-time';
import { PostResultStressPage } from '../post-result-stress/post-result-stress';
import { YouTubeLinksPage } from '../you-tube-links/you-tube-links';
import { SymptomsOfExamStressPage } from '../symptoms-of-exam-stress/symptoms-of-exam-stress';
import { TimeManagementTipsPage } from '../time-management-tips/time-management-tips';

@Component({
  selector: 'page-exam-help',
  templateUrl: 'exam-help.html'
})
export class ExamHelpPage {

  constructor(public navCtrl: NavController) {
  }
  goToReadyToStudy(params){
    if (!params) params = {};
    this.navCtrl.push(ReadyToStudyPage);
  }goToExamTime(params){
    if (!params) params = {};
    this.navCtrl.push(ExamTimePage);
  }goToPostResultStress(params){
    if (!params) params = {};
    this.navCtrl.push(PostResultStressPage);
  }goToYouTubeLinks(params){
    if (!params) params = {};
    this.navCtrl.push(YouTubeLinksPage);
  }goToSymptomsOfExamStress(params){
    if (!params) params = {};
    this.navCtrl.push(SymptomsOfExamStressPage);
  }goToTimeManagementTips(params){
    if (!params) params = {};
    this.navCtrl.push(TimeManagementTipsPage);
  }
}
