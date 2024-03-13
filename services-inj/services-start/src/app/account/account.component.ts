import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsServices } from '../accounts.services';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;
  statusChanged: any;

  constructor(private loggingService: LoggingService, private accountsServices: AccountsServices) {}

  onSetTo(status: string) {
    this.accountsServices.updateStatus(this.id, status);
    this.loggingService.logStatusChange(status);
    this.accountsServices.statusUpdated.emit(status);
  }
}
