class GameTablesController < ApplicationController

  def index
    gametables = GameTable.all
    render json: gametables,status:200
  end 
  
end
