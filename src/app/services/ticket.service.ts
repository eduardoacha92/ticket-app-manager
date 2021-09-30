import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TicketModel } from '../models/ticket.model';
import { map, delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private url = 'https://call-log-manager-app-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient) { }

  createTicket2(ticket: TicketModel) {
    return this.http
      .post('https://call-log-manager-app-default-rtdb.firebaseio.com/tickets.json', ticket);
  }

  getTickets() {

    
    return this.http.get(`${this.url}/tickets.json`)
      .pipe(
        map(this.createArray)
      );
  }

  private createArray(ticketsObj: any) {
    const tickets: TicketModel[] = [];
    Object.keys(ticketsObj).forEach(key => {
      const ticket: TicketModel = ticketsObj[key];
      ticket.id = key;
      tickets.push(ticket);
    });

    return tickets;
  }

}
