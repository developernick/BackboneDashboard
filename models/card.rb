class Card < ActiveRecord::Base
  def to_s
    self.to_s + "the cards have been delt"
  end
end
