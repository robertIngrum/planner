class CreateEvents < ActiveRecord::Migration
  def change
    create_table :event do |t|
      t.string :name
      t.text :description

      t.timestamps null: false
    end
  end
end
