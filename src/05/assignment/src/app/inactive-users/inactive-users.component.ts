import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../utils/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[] =[];
  // @Output() userSetToActive = new EventEmitter<number>();

  constructor(private usersService: UsersService) {
    this.users = this.usersService.inactiveUsers;
   }

  onSetToActive(id: number) {
    this.usersService.setActive(id);
  }
}
