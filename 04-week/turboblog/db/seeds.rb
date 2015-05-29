# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
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