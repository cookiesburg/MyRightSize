class AddColumnsToShirtsTable < ActiveRecord::Migration[5.1]
  def change
    add_column :shirts, :neck, :integer
    add_column :shirts, :slv_l, :integer
    add_column :shirts, :slv_w, :integer
    add_column :shirts, :shld, :integer
    add_column :shirts, :chest, :integer
    add_column :shirts, :mid, :integer
    add_column :shirts, :cuff, :integer
    add_column :shirts, :length, :integer
    add_column :shirts, :desc, :text

  end
end
