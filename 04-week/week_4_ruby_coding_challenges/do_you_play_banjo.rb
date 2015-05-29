<!-- DO YOU PLAY BANJO?

Create a function named 'plays_banjo?' which answers the question "Do you play Banjo?". If your name starts with the letter "R" or lower case "r", you are playing Banjo!

***Example***

plays_banjo?('john') #=> "john does not play banjo"
plays_banjo?('rahul') #=> "rahul plays banjo"
 -->

# def plays_banjo
# 	puts "whats ur name?"
# 	plays_banjo=gets.chomp

# 	if plays_banjo.include?("r")
# 		puts "indeed you play banjo"
# 	else
# 		puts "you dont play banjo!"
# 	end	
# end
# plays_banjo

def plays_banjo
	puts "whats ur name?"
	plays_banjo=gets.chomp

	if plays_banjo.start_with?("r","R") #can add a name starting with a capital or minuscule letter 
		puts "indeed you play banjo"
	else
		puts "you dont play banjo!"
	end	
end
plays_banjo #to call the fct

def plays_banjo
	puts "whats ur name?"
	plays_banjo=gets.chomp

	if plays_banjo.start_with?("r","R") #can add a name starting with a capital or minuscule letter 
		puts "#{plays_banjo} indeed you play banjo"
	else
		puts "#{plays_banjo} you dont play banjo!"
	end	
end
plays_banjo #to call the fct

# or another way 
def plays_banjo
	puts "whats ur name?"
	name=gets.chomp

	if name.start_with?("r","R") #can add a name starting with a capital or minuscule letter 
		puts "#{name} indeed you play banjo"
	else
		puts "#{name} you dont play banjo!"
	end	
end
plays_banjo #to call the fct