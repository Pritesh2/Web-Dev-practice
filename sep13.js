var a = 10;
a = 20;
console.log(a)

//let a = 20;
let b = "Hello Pritesh !!!";
let c = true;
let d = [1,2,3,4] // object 

let e = {
    name : "Alice",
    age : 20
}

console.log('type of a : {}', typeof(a))
console.log('type of b : {}', typeof(b))
console.log('type of c : {}', typeof(c))
console.log('type of d : {}', typeof(d)) // 
console.log('type of e : {}', typeof(e))


/**
 *  Function
 */

function sum(a,b)
{
    return a+b;
}

console.log(sum(2200,9))

/**
 * Arrow function
 */

// const sum = () => {}

const arrow = (a,b) => {console.log(a+b);return a+b;}

console.log('Sum of 2 numbers from arrow function is:', arrow(30,50))

const person = {
    name:"Alice",
    age: 28,
    getNormal : function(){console.log(this)},
    getArrow : () => {console.log(this)}
}

person.getNormal();
console.log(" Calling Arrow now : ")
person.getArrow();

/**
 * Fetching data from quotes api : https://dummyjson.com/docs/quotes
 */

// without async 
const quotes = () => {
    let response = fetch('https://dummyjson.com/docs/quotes')

    console.log(response);

    //data = response.json();
}
console.log("Calling quotes api")
//quotes();

// with async 
const quotesAsync = async () => {
    let response = await fetch('https://dummyjson.com/quotes')

    //console.log(response)
    data = await response.json();

    console.log(data)

    // return `
    // <div>
    // <h3>${data.quote}</h3>
    // </div>
    // `
}

quotesAsync();

