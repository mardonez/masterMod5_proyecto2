import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AlertController } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AlertPage implements OnInit {

  constructor(private router: Router,
              private AlertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.AlertCtrl.create({
      header: 'Mensaje de prueba',
      backdropDismiss:false,
      subHeader: 'Módulo 05',
      message: 'Desarrollo de aplicaciones para android e IOS.',
      buttons: ['Entendido'],
    });

    await alert.present();
    };

    goToHome(){
      this.router.navigate(['/home'])
    }
}
