Rails.application.routes.draw do
  get '/' => 'home#index'

  resources 'home', only: [:index]
end
