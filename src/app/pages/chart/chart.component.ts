import { Component, OnInit } from '@angular/core';
import { TicketModel } from 'src/app/models/ticket.model';
import { TicketService } from 'src/app/services/ticket.service';
import { ChartModel } from './chartModel';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  view: [number, number] = [1000, 700];
  chartData: TicketModel[] = [];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  single: any[] = [];
  openCounter = 0;
  closeCounter = 0;


  constructor(private ticketService: TicketService) {
    this.ticketService.getTickets().subscribe(resp => {
      this.chartData = resp;
      this.chartData.forEach(x => {
        if (x.status == 'Open') {
          this.openCounter++;
        } else {
          this.closeCounter++;
        }
      }
      );
      const openModel = new ChartModel();
      openModel.name = 'Open';
      openModel.value = this.openCounter;
      const closeModel = new ChartModel();
      closeModel.name = 'Close';
      closeModel.value = this.closeCounter;
      const temp = [openModel, closeModel];
      //this.single = JSON.parse(JSON.stringify(temp));
      this.single=temp;
    });
  }

  ngOnInit() {
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
