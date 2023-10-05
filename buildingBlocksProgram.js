
var result = null;
console.log(result);
//console output: null

try {
    console.log('Hello');
} catch(err) {
    console.log('Goodbye');
} 
//console output: Hello

var x;

if (x === null) {
    console.log('null');
} else if (x === undefined) {
    console.log('undefined');
} else {
    console.log('ok');
} 
//console output: undefined

/*throw new Error();
console.log('Hello');
//console output: nothing */

try {
    console.log('hello')
} catch(e) {
    console.log('caught')
} 
//console output: hello

/*try {
    console.log('hello)
    } catch(e) {
    console.log('caught')
    } 
//console output: syntax error */

   try {
        throw new Error();
        console.log('Hello');
    } catch(err) {
        console.log('Goodbye');
    } 
//console output: Goodbye

var result;
console.log(result); 
//console output: null

var str = "Hello";
str.match("jello"); 
//console output: none

try {
    Number(5).toPrecision(300)
} catch(e) {
    console.log("There was an error")
} 
//console output: There was an error 

console.log('Hello')
//console output: Hello





