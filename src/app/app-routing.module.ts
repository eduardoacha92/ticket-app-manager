import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './pages/chart/chart.component';
import { CreateNewTicketComponent } from './pages/ticket/create-new-ticket/create-new-ticket.component';
import { SearchTicketComponent } from './pages/ticket/search-ticket/search-ticket.component';

const routes: Routes = [
  { path: 'search-ticket', component: SearchTicketComponent },
  { path: 'create-new-ticket', component: CreateNewTicketComponent },
  { path: 'app-chart', component: ChartComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'search-ticket' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
