Rails.application.routes.draw do
  resources :diaries, only: [:index, :create]
  resources :postures, only: [:index, :show, :create]
  resources :users, only: [:index, :create]
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
    
end
