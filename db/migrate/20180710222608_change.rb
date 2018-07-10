class Change < ActiveRecord::Migration[5.1]
  def change
    rename_table :li_users, :users
  end
end
