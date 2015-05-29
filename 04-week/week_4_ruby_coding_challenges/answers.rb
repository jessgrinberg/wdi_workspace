# arr = ['a','b','c','d']
# hsh = {'e'=>'f','g'=>'h'}



# def new_array(array, hash)
# 	hash.each do |key, value|
# 		array << key
# 		array << value
# 	end
	
# end

# new_array(arr, hsh)

# p arr


# ------

# def which_type(item)
# 	p item.class
# end

# -------

# def countBy(x,n)
# 	increment = x

# 	n.times do
# 		p x
# 		x += increment
# 	end
# end

# countBy(1,10)

# -----

# def plays_banjo? name
# 	if name[0].downcase == "r"
# 		p "#{name} plays banjo"
# 	else
# 		p "#{name} does not play banjo"
# 	end
# end
# plays_banjo? "ronald"


# -----
# def vowel_count(string)
# 	vowels = ["a", "e", "i", "o", "u"]

# 	counter = 0

# 	string.split('').each do |letter|
# 		vowels.each do |vowel|
# 			if letter == vowel
# 				counter += 1
# 			end
# 		end
# 	end

# 	p counter
# end

# vowel_count("I love chocolate chip cookies")
