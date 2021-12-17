# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Game(id: integer, link: string, picture: string, created_at: datetime, updated_at: datetime, name: string) 
# GameTable(id: integer, game_id: integer, user_id: integer, created_at: datetime, updated_at: datetime) 


# GameTable.create( user_id: 1) 

Game.create(link: "https://en.wikipedia.org/wiki/Satoshi_Kon", picture: "https://i.imgur.com/EyIgbRy.png", name: "Weeb Warriors II")
Game.create(link: "https://en.wikipedia.org/wiki/Shenmue", picture: "https://i.imgur.com/9vf9Qfb.png", name: "QTE")
Game.create(link: "https://en.wikipedia.org/wiki/Masaaki_Yuasa", picture: "https://i.imgur.com/hid1U5d.png", name: "Illegal Streaming Website")
Game.create(link: "https://en.wikipedia.org/wiki/FLCL", picture: "https://i.imgur.com/k3Hvebc.png", name: "Fetch-A-Sketch")
GameTable.create(game_id: 1, user_id: 1) 
GameTable.create(game_id: 2, user_id: 1) 
GameTable.create(game_id: 3, user_id: 1) 
GameTable.create(game_id: 4, user_id: 1) 

p "done seeding yo"
