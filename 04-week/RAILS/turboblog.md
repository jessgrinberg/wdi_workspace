#Rails turbo blog 
This is a turbo version of [RailsGuides - Getting Started with Rails](http://guides.rubyonrails.org/getting_started.html)


1. in terminal $

	`rails new turboblog`

	`cd turboblog`

	`rails g scaffold Post name:string title:string content:text`

	`rails g scaffold Comment commenter:string body:text post:references`

	`rake db:migrate`

2. in models/post.rb

	```
	class Post < ActiveRecord::Base
		has_many :comments
	end
	```

3. in routes.rb

	```
	root 'posts#index'
	resources :posts do
	  resources :comments
	end
	```

4. in app/views/posts/show.html.erb

	```
	<h2>Comments</h2>
<% @post.comments.each do |comment| %>
  <p>
    <b>Commenter:</b>
    <%= comment.commenter %>
  </p>

  <p>
    <b>Comment:</b>
    <%= comment.body %> <%= comment.created_at %>
  </p>
<% end %>	
```

5. in db/seeds.rb

	```
	Post.create([{name: "Blaise", title: "Turboblog instructions", content: "follow the markdown"},
	{name: "John", title: "Tamagotchi app", content: "https://github.com/ga-students/WDI_LA_16/tree/master/04-week/animal_lab"},
	{name: "Kenaniah", title: "Git part 2", content: "https://github.com/ga-students/WDI_LA_16/tree/master/03-week/git_part_2"}])
	Comment.create([
	{commenter: "Alex", body: "Thanks!", post_id: 1 },
	{commenter: "Alex", body: "Thanks!", post_id: 2 },
	{commenter: "Alex", body: "Thanks!", post_id: 3 },
	{commenter: "Andre", body: "Thanks!", post_id: 2 },
	{commenter: "Sophie", body: "Thanks!", post_id: 1 },
	{commenter: "Taylor", body: "Dope", post_id: 1 },
	{commenter: "Taylor", body: "Dope", post_id: 2 },
	{commenter: "Taylor", body: "Dope", post_id: 3 }])
	```
	
6. in terminal

	`rake db:seed`

	`rails s`
	
---

>How cool is that? A blog, with seed data, in 5 minutes flat

##Let's flex some Active Record muscle in the Rails console:

### `$ rails c`
###`irb(main)0>`
```
* Post.all
* Post.first
* Post.last
* tamagotchi = Post.find(2)
* tamagotchi.name
* tamagotchi.title
* tamagotchi.content
* tamagotchi.comments
* tamagotchi.comments.first.commenter
* tamagotchi.comments.first.body
* tamagotchi.comments.first.post
* tamagotchi
* tamagotchi.comments.first.post
* tamagotchi
* tamagotchi.comments.first.post
* tamagotchi
* tamagotchi.comments.first.post
* tamagotchi
* tamagotchi.comments.first.post.comments.find(2).post.methods.sort.last
* tamagotchi.comments.first.post == tamagotchi
* comment = Comment.find(5)
* comment.post
* newcomment = Comment.new({commenter: "Yo", body: "Cool", post_id: 2 })
* newcomment.methods.sort
* newcomment.save
* Comment.create({commenter: "Cristal", body: "Mega", post_id: 3 })
* post = Post.last
* post.comments
* post.comments.new({commenter: "Kevin", body: "Whooop"})
* post.comments.new({commenter: "Kevin", body: "Whooop"}).save
* post.comments.create({commenter: "Kevin", body: "Whooop"})
```

###This blog still needs much work.

#But so do your rails skills. 

####You should be able to build another blog like this from scratch, without using `rails g scaffold`, in a of couple hours (if you crank it).

#####This will mean that you will use a combination of `rails g model` and `rails g controller` instead. Along with manual routes in `config/routes.rb` and a few other bits and pieces you can figure out using the [coffeebean app](https://github.com/ga-students/WDI_LA_16/tree/master/04-week/RAILS/coffeebean.md) 



---

##Once you have had lots of practice at building a rails app from scratch... 

#Challenge add on:

Currently there is no way of associating comments with posts in the GUI (this should happen automatically at blog.com/comments/new) (our comments are only associated because they were seeded with a valid post_id)

There are different ways of approaching this problem. 

[RailsGuides - Getting Started with Rails](http://guides.rubyonrails.org/getting_started.html) has the answer

If that was too easy, challenge 2 is to figure out more ways of creating an association between these two models.

Next week we will be looking at adding a **user model**, with **logins** so that we can decide who sees and has editing rights over each of our models (ie: only admin can make posts) 
