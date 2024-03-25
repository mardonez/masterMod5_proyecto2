import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ActionSheetPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToHome(){
    this.router.navigate(['/home'])
  }

  public actionSheetButtons = [
    {
      text: 'Borrar',
      role: 'destructive',
      icon: 'trash-outline',
      cssClass:"rojo",
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Compartir',
      icon: 'mail-outline',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancelar',
      icon: 'warning-outline',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];
}
