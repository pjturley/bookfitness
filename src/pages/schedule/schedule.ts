import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { RestServiceProvider } from './../../providers/rest-service/rest-service';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public RestServiceProvider: RestServiceProvider, public toastCtrl: ToastController) {
    this.class = this.RestServiceProvider.getClasses();
  }

  class: Observable<any>;
 
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Pick a class',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }

}
