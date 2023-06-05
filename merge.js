// RxJS v6+
import { merge, from, Observable } from 'rxjs';

function mymerge(...obs){
    return new Observable(sub => {
        sub.next()
    });
}

//emit outputs from one observable
const example = mymerge(
  from([1,2,3]),
  from([1,2,3]),
);
//output: "FOURTH", "THIRD", "SECOND!", "FOURTH", "FIRST!", "THIRD", "FOURTH"
const subscribe = example.subscribe(val => console.log(val));