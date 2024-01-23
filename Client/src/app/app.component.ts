import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from "../services/weather.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  protected weatherData: any[] = [];

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.weatherService.getWeatherData().subscribe((data) => {
      this.weatherData = data;
    })
  }

}
