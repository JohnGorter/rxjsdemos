import { Observable } from "rxjs";

var myObservable = new Observable((observer) => {
    setTimeout( () => {
    observer.next("hello world!");
    observer.complete();
    }); 
  });
  
  console.log("before subscribe");
  
  var subscription = myObservable.subscribe( {
    next: x => console.log("next", x),
    error: err => console.error(err),
    complete: () => console.info("done")
  }
  );
  
  console.log("after subscribe");
  