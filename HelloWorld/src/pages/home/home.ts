import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  alertmessage= {  name: '',
    };
  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }
 AlerForm() {
    let alert = this.alertCtrl.create({
      title:  ' Merhaba Dostum!',
      subTitle: this.alertmessage.name + ' selam dostum ben bir ionic uygulamasıyım!',
      buttons: ['Tamam']
    });
    alert.present();
  }
 
}
