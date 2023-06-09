import { MyObservable } from './MyObservable.js'

var myObservable = new MyObservable(observer => {
    console.log('subscribing');
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
  });
  
  console.log('before subscription');
  
  myObservable.subscribe(
    x => console.log(x),
    err => console.error(err),
    () => console.info('done')
  );
  
  console.log('after subscription');