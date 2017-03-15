import {Component, OnInit, Input} from '@angular/core';
import {Ticket} from "../ticket";

@Component({
  selector: 'tk-ticket-item',
  templateUrl: './ticket-item.component.html',
  styleUrls: ['./ticket-item.component.css']
})
export class TicketItemComponent implements OnInit {

  //will be set from the outside
  @Input() ticket:Ticket;
  ticketId;

  constructor() { }

  ngOnInit() {
  }

}
