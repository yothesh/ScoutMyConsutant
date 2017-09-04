import { Component, OnInit } from '@angular/core';


import { StackExchangeDataService } from '../../services/stack-exchange-data.service'


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  stackData: Item[];
  stackSites = [
    { value: 'stackoverflow', viewValue: 'Stack Overflow' },
    { value: 'serverfault', viewValue: 'Server Fault' },
    { value: 'superuser', viewValue: 'Stack Overflow' },
    { value: 'gaming', viewValue: 'Arqade' },
    { value: 'webmasters', viewValue: 'Webmasters' }
  ];

  constructor(private stackExchangeDataService: StackExchangeDataService) {

  }

  ngOnInit() {
  }


  crawlSEData(tag, site) {
    this.stackExchangeDataService.getTopContributers(tag, site).subscribe((posts) => {
      this.stackData = posts.items;
    });
  }

}


interface Item {
  user: User,
  post_count: number,
  score: number
}

interface User {
  reputation: number,
  user_id: number,
  user_type: string,
  profile_image: string,
  display_name: string,
  link: string,
  accept_rate: any
}

