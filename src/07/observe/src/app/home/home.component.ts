import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private obsSubscription: Subscription = Subscription.EMPTY;
  constructor() { }

  ngOnInit() {
    // this.obsSubscription = interval(1000).subscribe((count: number) => {
    //   console.log(count);
    // })

    const customIntervalObservable =  new Observable((observer)=>{
      let count =  0
      setInterval(() =>{
        observer.next(count)
        if (count === 2){
          observer.complete()
        }
        if( count >5){
          observer.error(new Error("TOO big senpai"))
        }
        count++;
      },1000) 
    })

    
    this.obsSubscription = customIntervalObservable.pipe(map( data =>{
      return "Round:  "+data
    })).subscribe(count=>{
      console.log(count)
    },error => {
      console.log(error)
      alert(error)
    },() => {
      console.log('Completed')
    })

  }

  ngOnDestroy(): void {
    this.obsSubscription.unsubscribe();
  }

}
