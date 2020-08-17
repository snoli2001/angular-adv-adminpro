import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivationEnd, Router} from "@angular/router";
import {filter, map} from "rxjs/operators";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy{

  public title: string;
  public subsTitle$: Subscription;

  constructor( private router: Router) {
    this.subsTitle$ = this.getRouterArguments().subscribe(({title}) => {

      this.title = title;
      document.title = `AdminPro- ${title}`;
    });
  }

  ngOnDestroy(): void {
      this.subsTitle$.unsubscribe();
    }

  getRouterArguments(){
    return this.router.events
      .pipe(
        filter( event => event instanceof ActivationEnd),
        filter( (event: ActivationEnd) => event.snapshot.firstChild === null),
        map( (event: ActivationEnd) => event.snapshot.data )
      )

  }

}
