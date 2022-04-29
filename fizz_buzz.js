
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
        if(typeof(the_number) !== 'number') return "You have not entered a number";

        // if(the_number % 5 == 0 && the_number % 3 == 0 ) 
        // {
        //     console.log("FizzBuzz");
        // }
    }
);
