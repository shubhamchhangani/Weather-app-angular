import { Component } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faCloudRain } from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from '../Services/weather';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-left-container',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './left-container.html',
  styleUrl: './left-container.css'
})
export class LeftContainer {
  // variables for font awesome icons


  //Variables for left-nav-bar search icons
  faMagnifyingGlass: any = faMagnifyingGlass;
  faLocation: any = faLocation

  // Variables for temperature summary
  faCloud: any = faCloud;
  faCloudRain: any = faCloudRain;

  constructor(public weatherService: WeatherService) { }
  public onSearch(location: string) {
    this.weatherService.cityName = location;
    this.weatherService.getData();
  }
}
