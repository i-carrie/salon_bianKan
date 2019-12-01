Rails.application.routes.draw do
  # get 'books/index'
  resources :events
  # get 'tops/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'tops#index'
  resources :books, only: [:index, :new, :create] do
    collection do
      post :confirm
    end
  end
end
