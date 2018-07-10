class CreateLiUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :li_users do |t|
      t.string :name

      t.timestamps
    end
  end
end
