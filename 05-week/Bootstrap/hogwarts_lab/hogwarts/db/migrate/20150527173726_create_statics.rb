class CreateStatics < ActiveRecord::Migration
  def change
    create_table :statics do |t|
      t.string :about
      t.string :contact
      t.string :help

      t.timestamps null: false
    end
  end
end
