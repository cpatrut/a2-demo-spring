import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketsListComponent } from './tickets/tickets-list/tickets-list.component';
import { TicketItemComponent } from './tickets/tickets-list/ticket-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TicketsComponent,
    TicketsListComponent,
    TicketItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
