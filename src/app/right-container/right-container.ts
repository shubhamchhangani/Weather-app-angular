import { Component } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from '../Services/weather';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-right-container',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, RouterModule],
  templateUrl: './right-container.html',
  styleUrl: './right-container.css'
})
export class RightContainer {
  constructor(public weatherService: WeatherService) { };

  //fa icons for tumbs up/down and smile/frown
  faThumbsUp: any = faThumbsUp;
  faThumbsDown: any = faThumbsDown;
  faFaceSmile: any = faFaceSmile;
  faFaceFrown: any = faFaceFrown;

  private auth = inject(Auth);
  private router = inject(Router);

  async signOut() {
    await this.auth.signOut();
    this.router.navigate(['/auth']);
  }

  //function to control tab values or tab states

  //function for click of tab Today
  onTodayClick() {
    this.weatherService.today = true;
    this.weatherService.week = false;
  }

  //function for click of tab week
  onWeekClick() {
    this.weatherService.week = true;
    this.weatherService.today = false;
  }

  //functions to control metric values

  //function for click of metric celsius
  onCelsiusClick() {
    this.weatherService.celsius = true;
    this.weatherService.fahrenheit = false;
  }

  //function for click of metric Fahrenheit
  onFahrenheitClick() {
    this.weatherService.fahrenheit = true;
    this.weatherService.celsius = false;
  }
}
