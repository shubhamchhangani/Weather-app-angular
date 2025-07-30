import { Component } from "@angular/core";
import { LeftContainer } from "../left-container/left-container";
import { RightContainer } from "../right-container/right-container";

@Component({
  selector: "app-weather",
  template: `
  <div class="app-container">
  <div class="weather-container">
    <div class="left-container">
      <app-left-container></app-left-container>
    </div>
    <div class="right-container">
      <app-right-container></app-right-container>
    </div>
  </div>
</div>`,
  imports: [LeftContainer, RightContainer],
    styleUrls: ["./weather.css"],
})
export class WeatherComponent {
  // Weather component logic goes here
}
