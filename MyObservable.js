export class MyObservable {
    constructor(observe) {
        this.observe = observe;
    }
  
    subscribe(next, error, complete) {
      const observer = {
        next: (v)=> {
          if (next) next(v)
        },
        error: (err) => {
          if (error) error(err);
        },
        complete: () => {
          if (complete) complete();
        }
      };
  
      const teardown = this.observe(observer);
      
      return {
        unsubscribe: () => {
          if (teardown) teardown();
        }
      };
    }
  }

