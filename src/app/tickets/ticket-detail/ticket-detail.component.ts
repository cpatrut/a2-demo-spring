import {Component, OnInit, Input} from '@angular/core';
import {Ticket} from "../ticket";

@Component({
  selector: 'tk-ticket-detail',
  templateUrl: 'ticket-detail.component.html',
  styleUrls: ['ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {

  @Input() selectedTicket:Ticket;

  constructor() { }

  ngOnInit() {
  }

}
