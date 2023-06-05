import { Observable } from "rxjs";

let fetcher = {};

const catchedFetcher = () => new Observable((sub) => {
    if (fetcher.data) sub.next(fetcher.data);
    if (!fetcher.subs) {
        fetcher.subs = []; 
        console.log("calling the api to get the results");
        setTimeout(() => { console.log("fetched the api results"); 
        fetcher.data = 10; 
            for (let s of fetcher.subs) s.next(fetcher.data);
        }, 4000); 
    }
    fetcher.subs.push(sub); 
});

let obs1$ = catchedFetcher().subscribe(x => console.log("value is ", x)); 
let obs2$ = catchedFetcher().subscribe(x => console.log("value is ", x)); 
let obs3$ = catchedFetcher().subscribe(x => console.log("value is ", x)); 
let obs4$ = catchedFetcher().subscribe(x => console.log("value is ", x)); 

setTimeout(() => {
    let obs5$ = catchedFetcher().subscribe(x => console.log("value is ", x)); 
}, 5000);
