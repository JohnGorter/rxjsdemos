import { Observable } from "rxjs";


let obs$ = new Observable(sub =>{
    if (!started) start(); 
   globalsub.push(sub);
}); 



let globalsub = [];
let started = false;

setTimeout(() => {obs$.subscribe(x => console.log("x1", x))}, 2000); 
setTimeout(() => {obs$.subscribe(x => console.log("x2", x))}, 4000); 


function start() { 
    started = true; 
    let arr = [1,2,3,4];
    let index = 0; 
    let i = setInterval(() => {
        for (let s of globalsub)
            s.next(arr[index]); 
        index++; 
        if (index >= arr.length) clearInterval(i); 
    }, 1000);
}

