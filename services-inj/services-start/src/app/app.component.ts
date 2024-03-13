import { Component, OnInit } from '@angular/core';
import { AccountsServices } from './accounts.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
providers: [AccountsServices] 
})
export class AppComponent implements OnInit {
  accounts:{name:string, status: string}[] = [];

  constructor(private accountsServices: AccountsServices){}

  ngOnInit(): void {
    this.accounts = this.accountsServices.accounts;

  }

  onAccountAdded(newAccount: {name: string, status: string}) {
    // this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    // this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }


}

