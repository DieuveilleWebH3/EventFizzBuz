
// requesting the event module
const FizzBuzz = require('events');

// class Logger extends FizzBuzz()
// {
//     // function to take the arg and return the approriate answer
//     log(the_number)
//     {
//         if(typeof(the_number) !== 'number') return "You have not entered a number";
//     }

// }

// module.exports = Logger;



const my_fizz_buzz = new FizzBuzz();

my_fizz_buzz.on("zz", function(the_number) 
    {
        if(typeof(the_number) !== 'number') console.log("You have not entered a number");

        else if(the_number % 5 == 0 && the_number % 3 == 0 ) 
        {
            console.log("FizzBuzz");
        }
        else if(the_number % 5 == 0 ) 
        {
            console.log("Buzz");
        }
        else if(the_number % 3 == 0 ) 
        {
            console.log("Fizz");
        }
        else
        {
            console.log(the_number);
        }
    }
);


my_fizz_buzz.emit("zz", 'I may be a string');
// console.log("\n");

// my_fizz_buzz.emit("zz", 12);
// console.log("\n");

// my_fizz_buzz.emit("zz", 16);
// console.log("\n");

// my_fizz_buzz.emit("zz", 25);
// console.log("\n");

// my_fizz_buzz.emit("zz", 15);
// console.log("\n");
