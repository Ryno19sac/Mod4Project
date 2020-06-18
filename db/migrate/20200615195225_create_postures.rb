class CreatePostures < ActiveRecord::Migration[6.0]
  def change
    create_table :postures do |t|
    
          t.string :name, null: false
          t.string :description, null: false
          t.string :level, null: false
          t.boolean :is_breathing_in
          t.text :image
          
          
      t.timestamps
    end
  end
end
