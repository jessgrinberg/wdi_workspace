#Ruby Part 1

##SWBAT
- Run ruby code two ways
- Make a new variable in Ruby
- Write methods in Ruby
- Use string interpolation
- Explain what a Symbol is

###Running Ruby
There are two ways that we can run our Ruby code:
1) Interactively with 'irb'.
2) By creating Ruby program files in a text editor, then running them.

Let's open up irb by simply typing `irb`.
We can play around in here, and notice that it is quite similar to running Javascript in the web browser.

We can write strings, do math, and assign variables.

###Strings, numbers, and variables
*Strings. 
<!-- we can do fun things to strings that we can't do to other classes. E.g. upcase, downcase, swapcase, reverse -->

*Fixnum vs Float
<!-- Fixnum is an integer, Float is a decimal 
If we do arithmetic on two integer values (Fixnums), we get back an integer value (a Fixnum). If we mix a Fixnum and a Float, Ruby will automatically return the more general type, in this case, the floating point type.
-->

*variables 
<!-- we don't need the 'var' keyword. -->

This was fun, but if we want to actually save some Ruby code, we need to use a text editor. 


*Open up sublime, and create a new file called `example.rb`
*Inside, let's write `puts "hello, world"`
*In your terminal, run this file by typing `ruby example.rb`

`puts` simply writes to the screen whatever comes after it.


###Concatenation in Ruby is very similar to Javascript.
```
<!-- define my_name and my_age -->
my_name = "john"
my_age = 101

<!-- puts it to the terminal -->
puts "my name is " + my_name + " and I am " + my_age + " years old."
```

Why didn't this work? Read the error message. 

We need to turn the Fixnum into a string. We can do this with a special method that Fixnum has, called `.to_s`


***************

###More about strings
Strings come in two flavours: single-quoted and double quoted.

*Double-quoted strings are the best. 
*With double-quoted strings we can do an awesome thing called "string interpolation"
<!-- puts "John's favorite artist is #{singer}" 
	puts "She's had #{count} number ones in the US"
-->
* We didn't even need to use .to_s on the Fixnum, Ruby did that automatically. Ruby evaluates what is inside the curly braces, so we can easily double the number of hits Kesha has had. 


###Your task - 1
*Create a new Ruby file with the variables 'name', 'fav_color', and 'fav_number'.
*Use string interpolation to print out a sentence introducing yourself, saying what your favorite color and number are. 
*run the Ruby file from the terminal

### puts and gets
Puts means 'put string'. So what could 'gets' possibly mean?

Let's assign a variable to 'gets' in irb, and see what happens.

###Your task - 2
*Create a new Ruby file that asks for a user's first name, and assigns it to the variable first_name.
*The program should then ask for the user's favorite singer, and assign it to another variable.
*Use string interpolation to print out a sentence that greets the user, and says that Kesha is much better than their favorite singer.
*Run the Ruby file from the terminal


###Writing our own methods

Writing our own methods is easy. 
```
def name_of_method(<!--add your arguments here-->)
	<!-- this is where you write your code -->
end

def say_hello(name)
	puts "Hello #{name}"
end

```

### if/else statements
Just like everything in Ruby, it is _similar_ to javascript, but easier. 

if name == "john"
	puts "Great name!"
else 
	puts "hmmmm hi there"
end 

###Your task - 3
*Write a method called favorite_movie in a ruby file.
*When called, the method should ask the user for their favourite movie
*If their favorite movie is the same as _your_ favorite movie, congratulate them on their good taste
*If their favorite movie is something else, ask them to reconsider, then run the method again so they are asked for their favorite movie again.


<!-- Things to consider - what if the user types in the correct answer, but it is not capitalized? -->


### Symbols!
We've talked about Strings, Fixnums, and Floats. There's another class of data called Symbol. A symbol is just a convenient way to name, or identify, something in our code. 

Symbols are one of the hardest things to grasp about ruby. 

Strings are all separate objects. Symbols always refer to the same object. 

Think of them as constant strings. We can't really do much with symbols. We can't process them too much. We use symbols when we want to NAME something. We use Strings when we want to do some kind of text processing on the object.  






