import { ReplaySubject } from 'rxjs';

const sub = new ReplaySubject();


sub.subscribe(x => {
  console.log('Subscriber A', x);
});
 
setTimeout(() => {
    sub.subscribe(x => {
        console.log('Subscriber B', x);
      });
}, 2500); 


let counter = 0; 
setInterval(() => { sub.next(counter++)}, 1000);  