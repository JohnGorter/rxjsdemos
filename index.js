// observable, observer, subscriber

import { Observable } from "rxjs";


Observable.of = function(...args) {
    return new Observable((subscriber) => {
        for(let a of args) {
            subscriber.next(a); 
        }
    })
}

Observable.empty = function () {
    return new Observable((subscriber) => {
        subscriber.complete(); 
    })
}
 Observable.never = function () {
    return new Observable((subscriber) => {
        
    })
}

Observable.throw = function (err) {
    return new Observable((subscriber) => {
        subscriber.error(err); 
    })
}



Observable.ofTimer = function(time) {
  return new MyObservable((subscriber) => {
    let timer =  null
    let counter = 0
    timer = setInterval(() => { 
        console.log("producing a new value");
        subscriber.next(counter++)
    }, time);
    return () => {
        console.log("client is done, lets stop this stuff");
        if (timer) clearInterval(timer); 
    }
})
};

let client$ = Observable.throw(new Error("err")); 

console.log("we are ready for business");
let u = client$.subscribe({
    next: (v) => console.log("ontvang data", v),
    error: (err) => console.log("error: ", err)
});

setTimeout(() => {
    console.log("unsubscribing from data producer..")
    u.unsubscribe(); 
}, 4000); 
console.log("end of program!");
