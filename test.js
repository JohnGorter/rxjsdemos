import { startWith, interval, map } from "rxjs";

let obs$ = interval(1000).pipe(
    map(x => x + 1),
    startWith(0)
);

const logger = obs$.subscribe(x => console.log("x", x));
setTimeout(() => {
    logger.unsubscribe(); 
}, 5000);