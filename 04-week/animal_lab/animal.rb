class Animal

	attr_accessor :name, :age, :superpower

	def initialize(name, age, superpower)
		@name = name
		@age = age 
		@superpower = superpower
		
	end

	
	# 2 - Use attr_reader, attr_writer, or attr_accessor(=combine reader et writer)
	# to make instance variables readable, writable, or both.

	def eat(food)
		puts "#{name} is eating #{food}"
	end

	def hobby(favorite,more)
		puts "#{name} , his favorite hobby is #{favorite} and even more favorite #{more}"
	end

	# 1 - Write an initialize method here
	# The initialize method takes arguments, 
	# then assigns these to instance variables.
	# e.g. you could give your animal a 'strength' variable, and a 'health' variable

	# 3 - Write a method that makes your animal do something simple.
	# e.g. say_hello could simply put something to the console.

	# 4 - Write a method that makes your animal do something more complicated.
	# e.g. eat_vegetables could increase the animal's health

end