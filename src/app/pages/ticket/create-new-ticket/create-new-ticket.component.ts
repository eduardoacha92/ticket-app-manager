
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TicketModel } from 'src/app/models/ticket.model';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-create-new-ticket',
  templateUrl: './create-new-ticket.component.html',
  styleUrls: ['./create-new-ticket.component.css'],

})
export class CreateNewTicketComponent implements OnInit {

  ticket: TicketModel = new TicketModel();
  statusList = ['Open', 'Closed'];

  constructor(private ticketService: TicketService) {
    this.ticket.date = new Date();
  }

  ngOnInit(): void { }

  save(form: NgForm) {
    if (form.invalid) {
      console.log('Invalid Form');
      return;
    }
    this.ticketService.createTicket2(this.ticket)
      .subscribe(responseData => {
        form.resetForm();
      });
  }
}





