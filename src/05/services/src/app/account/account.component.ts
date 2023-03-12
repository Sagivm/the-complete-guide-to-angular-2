import { Component, Input } from '@angular/core';
import { AccountService } from '../utils/account.service';
import { LoggingService } from '../utils/logging.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string} = {name: '', status: ''};
  @Input() id: number = -1;

  constructor(
    private loggingService: LoggingService,
    private accountsService:AccountService) { }

  onSetTo(status: string) {
    this.accountsService.onStatusChange(this.id,status)
    // this.loggingService.logStatusChanged(status)
    this.accountsService.statusUpdated.emit(status)
  }
}
