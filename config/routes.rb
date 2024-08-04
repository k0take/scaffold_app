Rails.application.routes.draw do
  resources :users

  get '*path', controller: 'application', action: 'render_404'
end
