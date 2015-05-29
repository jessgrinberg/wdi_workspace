# Exercises
# First Exercise
# You Do:
# create a class called Tweet
# write a method called initialize that takes in four parameters: message, tweeter(this will be the name of the person who created the tweet), location, and is_public(this will be a boolean).
# inside the initialize method, set instance variables to the values of these incoming parameters.
# We Do:
# additionally, add a created_at attribute that is set to Time.now.
# make is_public default to true unless specified otherwise

# Second Exercise
# Write getter methods for all five attributes of our Tweet objects.

# Third Exercise
# Write setter methods for four of the five attributes of our Tweet objects (don't write one forcreated_at - that should never get changed!).

# Fourth Exercise
# refactor your initialize method to take in an options hash instead of four separate incoming parameters. 

# Fifth Exercise
# refactor your getter and setter methods to use attr_accessor or attr_reader

## PERSO NOTES
# # inside the () those are the parameters to our method
# # then we assign them to properties ex; @message = message etc
## @message refers to instance variable and message to local variable


class Tweet

	#5
	attr_accessor :message, :tweeter, :location, :is_public
	attr_reader: created_at

	#4ex
	def initialize (options={})
		@message = options[:message] 
		@tweeter = options[:tweeter]
		@location = options[:location]
		@is_public = options[:is_public]
		@created_at = Time.now
	end

# #1ex
# 	def initialize (message,tweeter,location, is_public = true)
# 		@message = message 
# 		@tweeter = tweeter
# 		@location = location
# 		@is_public = is_public
# 		@created_at = Time.now
# 	end

#2ex
	def message
		@message 
	end

	def tweeter 
	@tweeter
	end

	def location
	@location
	end

	def is_public
	@is_public
	end

	def created_at
	@created_at
	end

#3ex
	def message=(value)
		@message = value
	end

	def location=(value)
		@location = value
	end

	def tweeter=(value)
		@tweeter = value
	end

	def is_public=(value)
		@is_public = value
	end

end

