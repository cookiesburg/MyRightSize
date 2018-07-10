class AddColumnsToUserTable < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :neck, :integer
    add_column :users, :slv_l, :integer
    add_column :users, :slv_w, :integer
    add_column :users, :shld, :integer
    add_column :users, :chest, :integer
    add_column :users, :mid, :integer
    add_column :users, :cuff, :integer
    add_column :users, :length, :integer

  end
end
