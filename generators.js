


function* generateData(p) {
   console.log("aa", p);
   let result = yield p.toLowerCase()
   yield result.toLowerCase()
   yield "c"
}
//     while (true) {
//         yield 10; 
//     } 
// }

let data = generateData("JOHN"); 
let val = data.next().value
console.log("next:", data.next(val + " GORTER"));  
// for (let i of data) {
//     console.log("i", i)
// }

// function main(){
//     for (let l of generateData()){
//         console.log("value", l);
//     }
// }