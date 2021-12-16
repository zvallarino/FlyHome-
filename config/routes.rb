Rails.application.routes.draw do
  resources :highscores
  resources :game_tables
  resources :games
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  get "/test", to: "users#test"
  delete "/logout", to: "sessions#destroy"
  patch "/edit", to: "users#update"
end


# rails g controller Sessions