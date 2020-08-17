import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, interval, Subscription} from "rxjs";
import {retry, take, map, filter} from "rxjs/operators";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit,OnDestroy {

  public intervalSubs: Subscription;

  constructor() { }

  ngOnDestroy(): void {
      this.intervalSubs.unsubscribe();
  }

  ngOnInit(): void {

    // this.returnObserver().pipe(
    //   retry(1)
    // ).subscribe( value =>
    //     console.log('Subs:', value),
    //   (error) =>console.warn('Error', error),
    //   () => console.info('Obs finished')
    // );

    this.intervalSubs = this.returnInterval()
      .subscribe( console.log );

  }

  returnInterval(): Observable<number> {

    return interval(100)
      .pipe(
        take(10),
        map( value => value + 1),// 0 => 1
        filter( value => (value % 2 == 0) )
      );
  }

  returnObserver(): Observable<number> {

    let i = -1;

    return new Observable<number>(observer =>{

      const interval = setInterval( () => {

        i++;
        observer.next(i);

        if(i === 4){
          clearInterval(interval);
          observer.complete();
        }

        if( i==2 ) {
          observer.error('i reached the value of 2');
        }

      },1000)

    });

  }

}
