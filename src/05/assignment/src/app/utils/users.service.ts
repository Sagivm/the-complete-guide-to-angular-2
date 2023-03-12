import { Injectable, EventEmitter } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class UsersService{
    // Lists
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];
    
    constructor(private counterService: CounterService){

    }

    setInActive(index: number){
        
        this.inactiveUsers.push(this.activeUsers[index]); 
        this.deleteObj(this.activeUsers,this.activeUsers[index]);
        this.counterService.countI2A()
    }

    
    setActive(index: number){
        
        this.activeUsers.push(this.inactiveUsers[index]); 
        this.deleteObj(this.inactiveUsers,this.inactiveUsers[index]);
        this.counterService.countA2I()
    }

    deleteObj(lst:string[],msg:string) {
        const index: number = lst.indexOf(msg);
        if (index !== -1) {
            lst.splice(index, 1);
        }        
    }


}