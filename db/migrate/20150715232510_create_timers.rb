class CreateTimers < ActiveRecord::Migration
  def change
    create_table :timers do |t|
      t.string :name
      t.integer :minutes

      t.timestamps null: false
    end
  end
end
