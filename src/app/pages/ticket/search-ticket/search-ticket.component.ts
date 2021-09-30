import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TicketModel } from 'src/app/models/ticket.model';
import { TicketService } from 'src/app/services/ticket.service';


@Component({
  selector: 'app-search-ticket',
  templateUrl: './search-ticket.component.html',
  styleUrls: ['./search-ticket.component.css']
})
export class SearchTicketComponent implements OnInit {

  displayedColumns: string[] = ['date', 'user', 'title', 'status'];
  filterValues: any = {};
  statusTicket = false;
  tickets: TicketModel[] = [];
  dataSource!: MatTableDataSource<TicketModel>;
  dataLength!: number;

  constructor(private ticketService: TicketService) { }

  ngOnInit() {

    this.ticketService.getTickets().subscribe(data => {
      this.tickets = data
      this.dataSource = new MatTableDataSource<TicketModel>(this.tickets);
      this.dataLength = this.dataSource.filteredData.length;
      console.log(this.tickets)
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataLength = this.dataSource.filteredData.length;
  }
}
