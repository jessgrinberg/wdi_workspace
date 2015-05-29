#RUBY BASICS PART 2 - Hashes, Arrays, Loops, Conditionals

---
##SWBAT
* Be able to create, read, and add to a Hash in Ruby
* Be able to create, read and add to an Array in Ruby
* Be able to iterate through Hashes and Arrays in Ruby
* Be able to work with while and until loops in Ruby
* Be able to work with conditionals in Ruby

---
##Group Exercise
We're going to split up into groups and spend 20 minutes researching, exploring, and discussing some of the fundamental facets of Ruby.  Then each group will teach their topic to the rest of the class and demonstrate these concepts using irb or by running a Ruby program in the terminal.

###Group 1 - Arrays!
Tell us all about how to use arrays in Ruby.  You should make sure that you are prepared to explain and demonstrate:

* how to create arrays in Ruby using the 'literal constructor'.
* how to add items to an array
* how to remove items from an array
* how to iterate over an array
* at least three other methods available to arrays--pick the ones that you think are really cool and want to show off to the rest of us! (http://ruby-doc.org/core-2.1.5/Array.html might be a helpful resource...hint, hint)

my example<!--// array =[]-->


###Group 2 - Hashes!
Tell us all about Ruby hashes!  You should make sure that you are prepared to explain and demonstrate:

* what a hash is
* how to create a hash using the 'literal constructor', with the hash rocket syntax and the newer syntax that was added in Ruby v1.9.
* how to get a value from a hash, if we know the key. 
* how to add items to a hash
* what symbols are and why we use them with hashes

my example<!--my_hash = {key: value} 
example : my_hash = {john:"guitar", 
						paul:"bass"}
		my_hash = [john]-->


###Group 3 - Methods!
Tell us all about writing custom methods in Ruby.  You should be prepared to explain and demonstrate:

* the syntax for writing a method in Ruby
* how you write a method that takes parameters
* how you call methods (ones that take parameters and ones that don't)
* a basic method that you wrote that takes at least one parameter

###Group 5 - Loops!
Tell us about loops in ruby. You should be prepared to explain and demonstrate:
* while
* until
* the .each iterator
* the .map iterator

my example<!--my_array.eacg |item| do
	puts item
end-->



###Group 5 - Conditionals!
Tell us all about how to write conditionals in Ruby.  You should be prepared to explain and demonstrate:

* how to write an if/else statement that checks at least three conditions
* how a case statement works and how to write one
* the `unless` keyword
* ternary conditionals

my example<!----if 
elsif
else
end-->



---------------------------

###Hashes

Basic Hash Construction

A Hash is a dictionary-like collection of unique keys and their values. 

```
* You can create an empty hash very easily:
my_hash = {}

* Using the hash rocket syntax
my_hash = {'a' => 100, 'b' => 200}

<!-- here, 'a' and 'b' are strings, that have a value of 100 and 200 respectively -->

* With hashes it is very common to use symbols as the keys:
my_hash = {:a => 100, :b => 200}

In fact, it is so common that there is a simpler syntax we use when we are using symbols:
my_hash = {a: 100, b: 200}

```

Taking it to another level

```
* How to access a value (have to use bracket notation)

the_beatles = {john: "rythm guitar", paul: "bass guitar", george: "lead guitar", ringo: "drums"}

the_beatles[:john]  #=> Returns "rythm guitar"
the_beatles[:george] #=> Returns "lead guitar"

* How to change the value of an element

the_beatles[:john] =  "rythm guitar and vocals"


* How to add a key-value pair

the_beatles[:donald] = "tambourine"


* How to delete a key-value pair

the_beatles.delete(:donald)
```


* Other useful methods

```
sample_hash = {'dog'=>'mammal','parakeet'=>'bird','tuna'=>'fish'}

sample_hash.keys #=> Returns an array with all keys
["dog", "parakeet", "tuna"]

sample_hash.values #=> Returns an array with all the values
["mammal", "bird", "fish"]
```

<!-- ####EXERCISE!
```
Santa Claus is preparing his Xmas list...

Bobby(yoyo), Gretchen(kendama), Billy(Xbox), Maryam(Bicycle)

*Create a hash where the child's names are the keys and the toy they want is the value. Use the Hash methods you've learned to create an array with the children's names and another array with the children's presents.

``` -->
list_hash = {'Bobby': yoyo }

---

###Arrays
Basic Array Construction

```
#Creating a new array 


my_array = []
OR
my_array = Array.new

```

Taking it to another level

```
first_array = Array.new(3)
#=> [nil, nil, nil]

first_array = Array.new(3,'hello')
#=> ["hello", "hello", "hello"]

second_array = ['hello', 'hello', 'hello']
#=> ["hello", "hello", "hello"]

third_array = Array(1..5)
#=> [1, 2, 3, 4, 5]
```

Methods to Know

* Push, pop, shift, unshift, delete

```
sample_array = [1]
sample_array.push(2,3) #=>[1, 2, 3]
sample_array.pop #=> returns 3, array is now transformed

sample_array.unshift(0) #=> [0, 1, 2]

sample_array.shift #=> returns 0, 

sample_array #=> [1,2]

sammple_array.delete(1) #=>[2]


```
* First, last

```
sample_array = Array(1..5) #=> [1,2,3,4,5]
sample_array.first #=> 1
sample_array.last #=> 5
```

* Size

```
first_array = [1,2,3]
second_array = []

#The size and length arrays do the same thing
first_array.size #=> 3
second_array.length #=> 0

first_array.empty? #=> false
second_array.empty? #=> truen

```

####EXERCISE

```
* Create an array with numbers from 1 to 100
* Create variables named first and last that are assigned the
  first and last values of the array you created
* Mutate the original array to remove the first and last items. 
  The new length should be 98 (verify this).
```
---

###Loops

* While loop

```
n = 1
while n < 11
  puts n
  n += 1
end
```

* Until loop

```
n = 1
until n > 10
  puts n
  n += 1
end
```

* Using .each to iterate over an array:

```
my_array = ["javascript", "ruby", "PHP", "python"]

my_array.each{|item| puts item}
<!-- OR -->
my_array.each do |item|
  puts item
end
```

* Using .map to iterate over an array
```
my_array = [1, 2, 3, 4, 5]

my_array.map{|elem| elem ** 2}
<!-- OR -->
my_array.map do |elem|
  puts elem ** 2
end
```

* The difference between #map and #each is in what they return.
 #each returns the original array and map returns a transformed
 array. Also note that map & each are available for hashes



####EXERCISE!!!
```
Create an array of integers. Using one of the loops you learned find the 
square of each element in the array.
```
---

###Conditionals


* If/Elsif/Else

```
* Unless you're using a one-liner then you need to end your if statement with and 'end' statement.

x = 2

if x < 3
  puts 'less than 3'
end

* Writing the same thing as a one-liner

puts 'less than 3' if x < 3

* Using elsif

if x < 2
  puts "less than 2"
elsif x == 2
  puts "It's two!"
else
  puts 'greater than two!'
end
```

* Unless

```
* My own personal preference is to avoid the 'not' operator and state conditions in the positive. Using the 'unless' keyword is great for this.

x = true

puts "it's true!" if x != false

unless x == false
  puts "it's true!"
end

* Unless can also be used as a one-liner

puts "it's true!" unless x == false


*** You cannot use elsif with unless, only else ***

unless x == false
  puts "it's true!"
else
  puts "it's false!"
end

unless x == false
  puts "it's true!"
elsif
  puts "it's false!"
end

#returns an error
```

####EXERCISE!!!

```
* Create an array using one of the methods you've learned today
* Write an if/else conditional statement that will print different output based on the array length
* Rewrite the same if/else conditional using 'unless'.

***BONUS*** Rewrite both your if/else and unless statements using as many one-liners as possible.
```