# WARMUP! You must be able to complete these before entering the arena.

some_letters = ["a", "b", "c", "d", "e"]
the_beatles = {john: "rythm guitar", paul: "bass guitar", george: "lead guitar", ringo: "drums"}
movies = ["Karate Kid", "Terminator", "Conan The Barbarian", "Mean Girls"]

# 1 - print out the third item in the some_letters array
# 2 - print out ringo's instrument
# 3 - push "Fight Club" onto the list of movies using the .push method 
# 4 - push "The Princess Diaries" onto the list of movies using the 'shovel operator' (<<). You will need to google this!
# 5 - Iterate over the movies array, printing out each movie
# 6 - Iterate over the_beatles hash, so that each beatle introduces himself and says what instrument he plays.


#1
print some_letters[2]

#2
puts the_beatles[:ringo]

or 

put

# 3
puts movies.push("Fight Club")

#4

puts movies << "The Princess Diaries"
#(will push it a t the end only)

#5
movies.each do |movie|
	puts movie
end

#6
the_beatles.each do |key,value|
	puts "my name is #{key}, and I play the #{value}"
end

