import { Component, ElementRef, ViewChild } from '@angular/core';
import { GlobalConstant } from '../Constant';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  name=GlobalConstant.Name;
  home=GlobalConstant.Home;
  about=GlobalConstant.About;
  work=GlobalConstant.Work;
  contact=GlobalConstant.Contact;

  constructor(){

  }
  toggleDayNight(){
    
  }
}
