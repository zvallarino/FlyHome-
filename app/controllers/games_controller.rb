class GamesController < ApplicationController

  def index
    games = Game.all
    render json: games, status: :ok
  end

end
