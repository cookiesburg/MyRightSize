class CreateShirts < ActiveRecord::Migration[5.1]
  def change
    create_table :shirts do |t|
      t.float :price
      t.string :brand

      t.timestamps
    end
  end
end
