
// requesting the event module
const FizzBuzz = require('events');

class Logger extends FizzBuzz
{
    // function to take the arg and return the approriate answer
    log(the_number)
    {
        // if the parameter is not a number we let the user know 
        if(typeof(the_number) !== 'number') console.log("You have not entered a number");

        // we check if the parameter is divisible both by 5 and 3
        else if(the_number % 5 == 0 && the_number % 3 == 0 ) 
        {
            console.log("FizzBuzz");
        }

        // we check if the parameter is divisible by 5 
        else if(the_number % 5 == 0 ) 
        {
            console.log("Buzz");
        }
        
        // we check if the parameter is divisible by 3
        else if(the_number % 3 == 0 ) 
        {
            console.log("Fizz");
        }

        // if the parameter is a number not divisible by 3 nor 5, we just show it
        else
        {
            console.log(the_number);
        }
    }

}

module.exports = Logger;


// ************************************** Old way ************************************** 

// const my_fizz_buzz = new FizzBuzz();

// my_fizz_buzz.on("zz", function(the_number) 
//     {
//         if(typeof(the_number) !== 'number') console.log("You have not entered a number");

//         else if(the_number % 5 == 0 && the_number % 3 == 0 ) 
//         {
//             console.log("FizzBuzz");
//         }
//         else if(the_number % 5 == 0 ) 
//         {
//             console.log("Buzz");
//         }
//         else if(the_number % 3 == 0 ) 
//         {
//             console.log("Fizz");
//         }
//         else
//         {
//             console.log(the_number);
//         }
//     }
// );


// my_fizz_buzz.emit("zz", 'I may be a string');
// console.log("\n");

// my_fizz_buzz.emit("zz", 12);
// console.log("\n");

// my_fizz_buzz.emit("zz", 16);
// console.log("\n");

// my_fizz_buzz.emit("zz", 25);
// console.log("\n");

// my_fizz_buzz.emit("zz", 15);
// console.log("\n");
