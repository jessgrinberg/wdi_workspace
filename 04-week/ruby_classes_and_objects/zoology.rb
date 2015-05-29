class Animal

	def initialize name
		@name = name
	end
	def say_hi
		puts "Hi! My name is " + @name.to_s
	end
	def breath
		puts "Inhale, exhale"
	end
	def what_type?
		puts @type ? @type : "My class is: " + self.class.to_s
	end
end

# Mammals

class Mammal < Animal
	def run
		puts "I'm running away!!"
	end
	def swim
		puts "Sure. But I'd rather not."
	end
end

class Dog < Mammal
	def bark
		puts "Woof!"
	end
end

# Birds

class Bird < Animal
	def preen
		puts "I am cleaning my feathers."
	end
	def fly
		puts "I am flying."
	end
end

class Penguin < Bird
	def fly
		puts "Sorry. I'd rather swim."
	end
	def swim
		puts "The water feels great!"
	end
end

class Swallow < Bird
	def initialize name
		super
		@type = "African or European Swallow?"
	end
end

class AfricanSwallow < Swallow
	def initialize name
		super
		@type = "African Swallow"
	end
end

class EuropeanSwallow < Swallow
	def initialize name
		super
		@type = "I'm a European Swallow"
	end
end

# This just runs whenever
puts "loaded :-)"
