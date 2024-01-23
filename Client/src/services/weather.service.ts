import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl: string = "http://localhost:5013";

  constructor(private http: HttpClient) {
  }

  getWeatherData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/weatherforecast`);
  }
}
