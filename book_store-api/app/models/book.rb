class Book < ApplicationRecord
  belongs_to :author
  validates :author,
             presence: true
  validates :title,
             presence: true,
             length: { in: 2..30 }
  # validates :rating,
  #            presence: true,
  #            numericality: { only_integer: true , less_than_or_equal_to: 5}
  validates :description,
             presence: true,
             length: { minimum: 2 }
  
end
