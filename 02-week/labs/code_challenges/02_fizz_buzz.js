// Write a program that uses console.log to print 
// all the numbers from 1 to 100, with two exceptions. 
// For numbers divisible by 3, console.log "Fizz" instead of the number, 
// and for numbers divisible by 5 (and not 3), console.log "Buzz" instead.
// If a number is divisible by both 3 AND 5, console.log "FizzBuzz".

function fizzbuzz() {
	for(i=1; i<=100; i++)
		if(i%3===0)	{
		    console.log("Fizz");
		}
		else if (i%5===0) {
		    console.log("Buzz");
		}
		else (i%3===0 && i%5===0); {
		    console.log("FizzBuzz");
		    
		}
        
}
        fizzbuzz();

