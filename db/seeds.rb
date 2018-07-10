# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Shirt.destroy_all

#grab all shirt id's and assign them a value to be the range of brand_id's in shirts
# put this all in an array?
  50.times do |index|
    brand_ids = ['J.Crew', 'Brooks Brothers', 'Club Monaco', 'Banana Republic', 'Bonobos', 'Ledbury', 'Hugo Boss', 'Vans']
    Shirt.create!(brand: brand_ids[rand(0..7)],
                  desc: 'Here is a description of the selected shirt. It probably contains some flowery language pertaining to where it is made and what it is made of.',
                  price: rand(30..100),
                  neck: rand(14..22),
                  slv_l: rand(20..25),
                  slv_w: rand(20..25),
                  shld: rand(20..25),
                  chest: rand(45..60),
                  mid: rand(45..60),
                  cuff: rand(9..12),
                  length: rand(40..55)
                )
  end

  p "Created #{Shirt.count} shirts"

User.destroy_all

users = User.create([
  { name: 'Demo User',
    neck: rand(14..22),
    slv_l: rand(20..25),
    slv_w: rand(20..25),
    shld: rand(20..25),
    chest: rand(45..60),
    mid: rand(45..60),
    cuff: rand(9..12),
    length: rand(40..55)
  },
])

  p "Created #{User.count} users"
