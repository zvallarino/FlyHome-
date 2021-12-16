class HighscoreSerializer < ActiveModel::Serializer
  attributes :id, :rating
  has_one :game
  has_one :user
end
