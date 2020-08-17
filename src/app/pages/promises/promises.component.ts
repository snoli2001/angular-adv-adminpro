import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsers().then( users => {
      console.log(users);
    });

    // const promise = new Promise( (resolve, reject) => {
    //   if (false) {
    //     resolve('Hello world');
    //   } else {
    //     reject('Something went wrong');
    //   }
    // });
    //
    // promise.then( ( message ) => {
    //   console.log(message);
    // })
    // .catch( error => console.log('Error in my promise', error));
    //
    // console.log('End of Init');
  }

  getUsers(){
    return new Promise( resolve => {
      fetch('https://reqres.in/api/users')
        .then( resp => resp.json())
        .then( body => resolve(body.data));
    });
  }

}
