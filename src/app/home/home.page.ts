import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage implements OnInit {

  constructor(private router: Router,
              private menuCtrl:MenuController) { }

  ngOnInit() {
  }

  goToCustomers(){
    this.router.navigate(['/customers']);
  }
  goToActionSheet(){
    this.router.navigate(['/action-sheet']);
  }
  goToAlert(){
    this.router.navigate(['/alert']);
  }
  goToButton(){
    this.router.navigate(['/button']);
  }
  goToCard(){
    this.router.navigate(['/card']);
  }

  mostrarMenu(){
    this.menuCtrl.open('first')
  }
}
