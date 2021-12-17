class GameSerializer < ActiveModel::Serializer
  attributes :id, :link, :picture, :name
end
