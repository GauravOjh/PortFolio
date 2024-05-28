import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { GlobalConstant } from '../Constant';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import Typed from 'typed.js';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,IonicModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit,OnDestroy {
  typed:Typed | undefined
  isDay = true;
  name=GlobalConstant.Name;
  home=GlobalConstant.Home;
  about=GlobalConstant.About;
  work=GlobalConstant.Work;
  contact=GlobalConstant.Contact;


  constructor(){

  }
  ngOnDestroy(): void {
    this.typed?.destroy();
  }
  ngOnInit(): void {
    const option={
      strings: ["Gaurav Ojha","I am Coder","FrontEnd Developer","BackEnd Developer","FullStack Developer"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      backDelay:1000
    }
    this.typed = new Typed("#text", option);
  }

  toggleDayNight() {
    this.isDay = !this.isDay;
  }
}
