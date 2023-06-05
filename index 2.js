import { Observable, generate } from "rxjs";

let counter = 0; 
let listeners = []; 
let i;


let obs$ = new Observable(sub => {
    if (!i) {
        i = setInterval(() => { 
            counter++;
            for (let l of listeners) l(); 
        }, 1000); 
    }
   listeners.push(() => { sub.next(counter)});
});

obs$.subscribe(x => console.log(`Eerste subscriber: ${x}`));  
setTimeout(() => {
    obs$.subscribe(x => console.log(`Tweede subscriber: ${x}`)); 
}, 2000); 

// generate(
//   2,
//   x => x <= 8,
//   x => x + 3
// ).subscribe(console.log);

// let counter = 0;
// setInterval(() => { counter++}, 1000); 

// let o$ = new Observable(sub => {
//     console.log("creating a new interval...")
//     let i = setInterval(() => 
//         sub.next(counter) 
//     , 500); 
//     console.log("interval created", i);
// }); 

// let o2$ = Observable.create(function() {
//     console.log("creating a new interval...")
//     let i = setInterval(() => 
//         sub.next(counter) 
//     , 500); 
//     console.log("interval created", i);
// }); 


// o$.subscribe(x => console.log("x", x));
// o$.subscribe(y => console.log("y", y));
// let observer = null
// const notificationArrayStream = Observable.create(function (obs) {
//   observer = obs;
//   return () => {}
// })

// function trigger(something) {
//   observer.next(something)
// }

// notificationArrayStream.subscribe((x) => console.log('a: ' + x))
// notificationArrayStream.subscribe((x) => console.log('b: ' + x))

// trigger('TEST')

let observable$ = new Observable(subscriber => {
    subscriber.next(1); 
    subscriber.next(20); 
    subscriber.next(3); 
    subscriber.next(4); 
    subscriber.complete(); 
});


let observable2$ = new Observable(subscriber => {
    subscriber.next("a"); 
    subscriber.next("b"); 
    subscriber.next("c"); 
    subscriber.next("d"); 
    subscriber.complete(); 
});

// merge(observable$, observable2$).subscribe(x => console.log("x", x))