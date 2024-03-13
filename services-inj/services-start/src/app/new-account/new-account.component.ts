import { Component, OnDestroy } from '@angular/core';
import { AccountsServices } from '../accounts.services';
import { LoggingService } from '../logging.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnDestroy {
  private statusUpdatedSubscription: Subscription;

  constructor(private loggingService: LoggingService, private accountsServices: AccountsServices) {
    this.statusUpdatedSubscription = this.accountsServices.statusUpdated.subscribe(
      (status: string) => alert('New status: ' + status)
    );
  }

  ngOnDestroy() {
    // Unsubscribe from the subscription to prevent memory leaks
    this.statusUpdatedSubscription.unsubscribe();
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsServices.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);
  }
}
