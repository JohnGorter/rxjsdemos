import { Observable, from, filter } from "rxjs";

let obs$ = from([1,2,3,4,5]).pipe(johnFilter(x => x % 2 == 0));
obs$.subscribe(x => console.log("x", x));


function johnFilter(){}