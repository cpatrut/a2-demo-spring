import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Ticket} from "../ticket";
import {Response} from "@angular/http";
import {HttpService} from "../../services/http-service.service";

@Component({
  selector: 'tk-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css']
})
export class TicketsListComponent implements OnInit {


  tickets:Ticket[]=[];
   @Output() ticketSelected = new EventEmitter<Ticket>();

  ticket:Ticket=new Ticket(1,"DummyStatus","DummyDescription","DummyCreationTime","DummyEstimates","DummyCreator","DummyTitle","https://img.clipartfest.com/28e5fb5fc5961896c12dda0b1b0ae2ca_ffb3c9b8e22a3005d10c3aa3bb6b8e-task-list-clipart_1300-1254.jpeg");

  constructor(private httpServie:HttpService) { }

  ngOnInit() {
    this.httpServie.getData().subscribe(
      (data) => console.log(data)
    );
  }

  onSelected(ticket:Ticket){
    this.ticketSelected.emit(ticket);
  }





}
