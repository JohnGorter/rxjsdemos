import { Subject} from "rxjs";


let cache;

let apiCall = (pred) => {
    cache = cache || new Subject();
    cache.calls = cache.calls || []; 
    cache.calls.push(cache.subscribe(pred)); 
    if (cache.data) {
        console.log("cached value return");
        cache.next(cache.data); 
        while (cache.calls.length > 0)
            cache.calls.shift().unsubscribe();
    }
    else if (!cache.init)
    {
        cache.init = true;
        console.log("calling the api to get the results");
        setTimeout(() => { 
            console.log("fetched the api results"); 
            cache.data = 10; 
            cache.next(cache.data); 
            while (cache.calls.length > 0)
              cache.calls.shift().unsubscribe();
        }, 1000); 
    }
}



let obs1$ = apiCall(x => console.log("1 value is ", x));
let obs2$ = apiCall(x => console.log("2 value is ", x));
let obs3$ = apiCall(x => console.log("3 value is ", x));
let obs4$ = apiCall(x => console.log("4 value is ", x));

setTimeout(() => {
    let obs5$ = apiCall(x => console.log("5 value is ", x)); 
    let obs6$ = apiCall(x => console.log("6 value is ", x)); 
    let obs7$ = apiCall(x => console.log("7 value is ", x)); 
}, 3000);
