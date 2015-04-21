require 'bundler'
Bundler.require()
# ---------------Connections---------------
ActiveRecord::Base.establish_connection(
  :adapter => 'postgresql',
  :database => 'all_the_cards'
)
# ---------------Models---------------
require './models/card'

# ---------------Helper---------------

def card_parameters
  request_body = JSON.parse(request.body.read.to_s)#Replaces content_type :json
  { title: request_body["title"], message: request_body["message"] }
end

get '/' do
  erb :index
end

get '/variables' do
  erb :variables
end


get '/api/cards' do
  content_type :json
  Card.all.to_json
end

get '/api/cards/:id' do
  content_type :json
  card = Card.find(params[:id].to_i)
  card.to_json
end

post '/api/cards' do
  card = Card.create(card_parameters)
  card.to_json
end

patch '/api/cards/:id' do
  card = Card.find(card_parameters)
  card.update(card_parameters)
  content_type :json
  card.to_json
end

put '/api/cards/:id' do
  card = Card.find(card_parameters)
  card.update(card_parameters)
  content_type :json
  card.to_json
end

delete '/api/cards/:id' do
  content_type :json
  Card.delete(params[:id].to_i)
  {message: 'Card has been removed'}.to_json
end

#
# model card.rb
#
# put patch delete update getall getid
#
# set up, test in postman, dont connect front and back
