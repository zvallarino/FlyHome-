class CreateHighscores < ActiveRecord::Migration[6.1]
  def change
    create_table :highscores do |t|
      t.integer :rating
      t.references :game, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
