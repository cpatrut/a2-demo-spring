import { Component, OnInit } from '@angular/core';
import {Ticket} from "./ticket";
import {HttpService} from "../services/http-service.service";
import {Response} from "@angular/http";

@Component({
  selector: 'tk-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  selectedTicket:Ticket;

  constructor() { }

  ngOnInit() {

  }

}
