import { Component } from '@angular/core';
import { LoggingService } from '../utils/logging.service';
import { AccountService } from '../utils/account.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {
  constructor(
    private loggingService: LoggingService,
    private acconutService: AccountService) {

      this.acconutService.statusUpdated.subscribe((status) => alert("new status"))
    }
  
  onCreateAccount(accountName: string, status: string)
  {
    this.acconutService.addAccount(accountName, status);
    // this.loggingService.logStatusChanged(status);
  }
  

}
