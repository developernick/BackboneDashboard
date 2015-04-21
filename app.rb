require 'bundler'
Bundler.require()

ActiveRecord::Base.establish_connection(
  :adapter => 'postgresql',
  :database => 'all_the_cards'
)

require './models/card'


get '/' do
  erb :index
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
  content_type :json
  card = Card.create(params[:card])
  card.to_json
end

put '/api/cards/:id' do
  content_type :json
  card = Card.find(params[:id].to_i)
  card.update(params[:card])
  card.to_json
end

put '/api/cards/:id' do
  content_type :json
  card = Card.find(params[:id].to_i)
  card.update(params[:card])
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
