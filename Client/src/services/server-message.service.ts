import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServerMessageService {
  private apiUrl: string = "http://localhost:5013";
  constructor(private http: HttpClient) { }

  getServerMessage(): Observable<string> {
    return this.http.get(`${this.apiUrl}/`, {responseType: 'text'});
  }
}
