import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from "@angular/common";
import {ServerMessageService} from "../services/server-message.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  protected message: string = "";
  constructor(private serverMessageService: ServerMessageService) {
  }

  ngOnInit(): void {
    this.serverMessageService.getServerMessage().subscribe((serverMessage) => {
      this.message = serverMessage;
    })
  }
}
