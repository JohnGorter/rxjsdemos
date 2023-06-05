

console.log("a");
setTimeout(() => { console.log("timeout completed")},0); 
Promise.resolve().then(() => console.log("completed promise"));
console.log("b");