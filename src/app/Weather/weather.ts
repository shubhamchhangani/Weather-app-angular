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
  styles:
  `
  .app-container {
    width: 100vw;
    height: 100vh;
    background-color: #d6d7da;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .weather-container {
    height: 85vh;
    width: 65vw;
    border-radius: 30px;
    display: flex;
    flex-direction: row;
  }

  .left-container {
    flex: 3;
    background-color: #ffffff;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
  }

  .right-container {
    flex: 7;
    background-color: #f6f6f8;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }
  `
})
export class WeatherComponent {
  // Weather component logic goes here
}
