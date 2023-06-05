 import { Observable } from 'rxjs';

// //emit value in sequence every 1 second
// const source = interval(1000);
// //output: 0,1,2,3,4,5....
// const subscribe = source.subscribe(val => console.log(val));



function ajax(url){
    return new Observable(async subscriber => {
        let data = await fetch(url);
        let text = await data.json();
        subscriber.next(text); 
    })
}
const url  = `https://api.github.com/users?per_page=20`;

let data$ = ajax(url); 
data$.subscribe(d=>console.log("data",d)); 

