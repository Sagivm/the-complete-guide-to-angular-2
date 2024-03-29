import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../utils/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[] =[];
  @Output() userSetToInactive = new EventEmitter<number>();

  constructor(private usersService: UsersService){
    this.users = this.usersService.activeUsers;
  }
  onSetToInactive(id: number) {
    this.usersService.setInActive(id)
    // this.userSetToInactive.emit(id);
  }
}
