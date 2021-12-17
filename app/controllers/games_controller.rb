class GamesController < ApplicationController

  def index
    games = Game.all
    render json: games,status:200
  end 
  
end
