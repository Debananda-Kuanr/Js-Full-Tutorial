const score=400;

const balance= new Number(100);
console.log(balance);//type is object

console.log(balance.toString());//output 100
console.log(typeof balance);//output object
console.log(balance.toString().length);//output 3
console.log(balance.toFixed(2));//output 100.00

const otherNumber=23.8966;
console.log(otherNumber.toPrecision(3));//output 23.9
console.log(otherNumber.toPrecision(5));//output 23.897

const hundred=100;
console.log(hundred.toPrecision());//output 1.0e+2


const num=123456;
console.log(num.toLocaleString("en-IN"));//output 1,23,456
console.log(num.toLocaleString("de-DE"));//output 123.456

//****************Maths ********************** */

console.log(Math.PI);//output 3.141592653589793

/*
📌 JavaScript Math Object

➡ Provides mathematical constants and functions.
➡ Works only with Numbers (not BigInt).

🔹 Common Constants:
- Math.E        // Euler’s number ≈ 2.718
- Math.PI       // π ≈ 3.14159
- Math.LN2      // Natural log of 2
- Math.LN10     // Natural log of 10
- Math.LOG2E    // Log base 2 of e
- Math.LOG10E   // Log base 10 of e
- Math.SQRT1_2  // √(1/2) ≈ 0.707
- Math.SQRT2    // √2 ≈ 1.414

🔹 Common Functions:
- Math.abs(x)      // Absolute value
- Math.ceil(x)     // Round up
- Math.floor(x)    // Round down
- Math.round(x)    // Round to nearest
- Math.trunc(x)    // Remove decimal part
- Math.max(...n)   // Largest value
- Math.min(...n)   // Smallest value
- Math.pow(x, y)   // x^y
- Math.sqrt(x)     // Square root
- Math.cbrt(x)     // Cube root
- Math.hypot(...n) // √(a² + b² + …)

🔹 Logs & Exponentials:
- Math.exp(x)    // e^x
- Math.expm1(x)  // e^x - 1
- Math.log(x)    // Natural log
- Math.log1p(x)  // ln(1 + x)
- Math.log2(x)   // log₂(x)
- Math.log10(x)  // log₁₀(x)

🔹 Trigonometry:
- Math.sin(x), Math.cos(x), Math.tan(x)
- Math.asin(x), Math.acos(x), Math.atan(x)
- Math.atan2(y, x)  // angle from x,y
- Math.sinh(x), Math.cosh(x), Math.tanh(x)
- Math.asinh(x), Math.acosh(x), Math.atanh(x)

🔹 Others:
- Math.sign(x)    // -1, 0, or 1
- Math.random()   // Random [0,1)
- Math.fround(x)  // 32-bit float
- Math.clz32(x)   // Leading zero count in 32-bit int
- Math.imul(a, b) // 32-bit integer multiplication
- Math.f16round(x)// Round to nearest float16
*/

console.log(Math.abs(-100));//output 100
console.log(Math.round(4.6));//output 5
console.log(Math.floor(4.6));//output 4(it will take lower value)
console.log(Math.ceil(4.2));//output 5(It will take higher value)
console.log(Math.min(4,6,8,10));//output 4
console.log(Math.max(4,6,8,10));//output 10

console.log(Math.random());//output random number between 0 to 1
console.log(Math.random()*10+1);//output random number between 1 to 10

const min =10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1)+min));//output random number between 10 to 20


