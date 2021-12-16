class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create,:index, :update, :show]

  def index
    users = User.all
    render json: users, status: :ok
  end 

  def show
   
    user = User.find_by(id: session[:user_id])
    if user
        render json: user, status: :ok
    else
        render json: {error: "Zebra"}, status: :unauthorized
    end
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  
  def update
    user = User.find(session[:user_id])
    user.update(user_params)
    render json: user, status: :ok
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation, :prof_pic)
  end


end
