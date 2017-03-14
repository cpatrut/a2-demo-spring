import { Component, OnInit } from '@angular/core';
import {Ticket} from "../ticket";

@Component({
  selector: 'tk-ticket-item',
  templateUrl: './ticket-item.component.html',
  styleUrls: ['./ticket-item.component.css']
})
export class TicketItemComponent implements OnInit {

  ticket:Ticket;

  constructor() { }

  ngOnInit() {
  }

}
