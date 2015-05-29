class AddColorToItems < ActiveRecord::Migration
  def change
    add_column :items, :color, :string
    add_column :items, :brand_name, :string
  end
end
