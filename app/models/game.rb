class Game < ApplicationRecord
  has_many :game_tables
  has_many :users, through: :game_tables
end
