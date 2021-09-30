import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ticket-app';

  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Search calls',
        link: './search-ticket',
        index: 0
      }, {
        label: 'New calls',
        link: './create-new-ticket',
        index: 1
      },
      {
        label: 'Graphics',
        link: './app-chart',
        index: 2
      },

    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
      console.log(this.router.url);
    });
  }


}
