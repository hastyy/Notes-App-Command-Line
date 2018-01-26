/**
 * Arrow functions do not bind the 'this' keyword.
 * ES6 allows for us to write methods on objects, without writting them
 *  as regular properties (<key>:<value>).
 * 
 * Arrow functions also do not bind the 'arguments' object.
 */


const user = {
    name: 'hastyy',
    sayHi: () => {
        console.log(arguments); // Prints the GLOBAL arguments object
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt() {
        console.log(arguments); // Prints the bound arguments object
        console.log(`Hi. I'm ${this.name}`);
    }
};

user.sayHi(1, 2, 3);   // Hi. I'm undefined
user.sayHiAlt(1, 2, 3);    // Hi, I'm hastyy