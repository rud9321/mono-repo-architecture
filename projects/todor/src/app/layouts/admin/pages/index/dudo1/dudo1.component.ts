import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent, from, timer } from 'rxjs';

@Component({
  selector: 'todor-dudo1',
  template: `
    <p>
      dudo1 works!
    </p>
  `,
  styles: []
})
export class Dudo1Component implements OnInit {
   observablexx: Observable<number>;
  constructor() { }
  ngOnInit() {

     const observablexx = Observable.create(_ => {

      _.next('Rudra');
      _.next('Pratap');
      _.next('Singh');
      _.next('Rathor');
      // let value = 0;
      // const interval = setInterval(() => {
      //   _.next(value);
      //   value++;
      // });
     });
     observablexx.subscribe(val => console.log(val));

     const observableEvent = fromEvent(document, 'click');
     observableEvent.subscribe(click => console.log(`${click.screenX} and y cordinate ${click.screenY}`));


     const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hey Rudra you done this!'), 5000);
     });

     const observablePromise = from(promise);
     observablePromise.subscribe(promisedata => console.log(promisedata));

     const observalbeTimer = timer(7000);
     observalbeTimer.subscribe(timerData => console.log(observalbeTimer));

  }

  

}
