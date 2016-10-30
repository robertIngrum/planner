Rails.application.routes.draw do
  get '/' => 'home#index'

  resources 'home', only: [:index]

  namespace :api do
    namespace :v1, defaults: {format: 'json'} do
      resources 'timeline', only: [:show]
    end
  end
end
