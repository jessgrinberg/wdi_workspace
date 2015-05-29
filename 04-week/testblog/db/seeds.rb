# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Post.create(name:"Blaise", title:"Turboblog instructions", content:"follow the markdown")
Post.create(name:"John", title:"Tamagotchi app", content:"Steps to make your own Tamagotchi")
Post.create(name:"Kenaniah", title:"Git part 2", content:"Tips to use Git")
Post.create(name:"Jenny", title:"Student strategies", content:"Please refer to the class repo")


Comment.create(commenter:"Alex", body:"Thanks", post_id:1)
Comment.create(commenter:"Alex", body:"Thanks", post_id:2)
Comment.create(commenter:"Alex", body:"Thanks", post_id:3)
Comment.create(commenter:"Andre", body:"Thanks", post_id:2)
Comment.create(commenter:"Sophie", body:"Thanks", post_id:1)
Comment.create(commenter:"Taylor", body:"Dope", post_id:1)
Comment.create(commenter:"Taylor", body:"Dope", post_id:2)
Comment.create(commenter:"Taylor", body:"Dope", post_id:3)