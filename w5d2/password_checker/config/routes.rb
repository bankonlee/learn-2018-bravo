Rails.application.routes.draw do
get '/create' => 'passwords#create'
get '/access' => 'passwords#access'
get '/account' => 'passwords#account'
# get '/check' => 'passwords#valid'
end
