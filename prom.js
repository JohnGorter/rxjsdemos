
class JGPromise {
    resolve () {
        
    }
    reject() {}

    constructor(action) {
        action(this.resolve, this.reject);
        return {
            then: () => {
                return 
            }
        }
    }
}


let p = new JGPromise((resolve, reject) => {
    console.log("getting some data...");
    setTimeout(()=>resolve(), 30000); 
})

console.log("starting this code..");
p.then(() => console.log("done!"))
console.log("completed this code..");

setTimeout(() => {
    console.log("starting this code again..");
    p.then(() => console.log("done2!"))
    console.log("completed this code again..");
}, 4000); 
