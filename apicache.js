import { Observable } from "rxjs";


const catchedFetcher = () => new Observable((sub) => {
    if (!catchedFetcher.fetcher) {
        catchedFetcher.fetcher = {};
        console.log("calling the api to get the results");
        setTimeout(() => { console.log("fetched the api results"); catchedFetcher.fetcher.data = 10; sub.next(catchedFetcher.fetcher.data); }, 4000); 
    } else {
        let i = setInterval(() => {
            if (catchedFetcher.fetcher.data) {
                sub.next(catchedFetcher.fetcher.data);
                clearInterval(i); 
            }
        }, 500);  
    }
});

let obs1$ = catchedFetcher().subscribe(x => console.log("value is ", x)); 
let obs2$ = catchedFetcher().subscribe(x => console.log("value is ", x)); 
let obs3$ = catchedFetcher().subscribe(x => console.log("value is ", x)); 
let obs4$ = catchedFetcher().subscribe(x => console.log("value is ", x)); 

setTimeout(() => {
    let obs5$ = catchedFetcher().subscribe(x => console.log("value is ", x)); 
}, 5000);
