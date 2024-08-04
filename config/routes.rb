Rails.application.routes.draw do
  resources :users
  
  root "tests#index"
  resources :tests, only: [:index, :create]

  get '*path', controller: 'application', action: 'render_404'
end
