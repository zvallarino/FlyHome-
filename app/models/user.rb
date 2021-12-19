class User < ApplicationRecord
  has_secure_password

  has_many :game_tables
  has_many :games,through: :game_tables
  
  validates :username, presence: true, uniqueness: true 
  validates :username, length: { minimum: 4 }

end
