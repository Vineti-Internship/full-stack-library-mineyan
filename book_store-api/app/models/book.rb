class Book < ApplicationRecord
  belongs_to :author
  validates :title, presence: true, length: { in: 2..30 }
  validates :rating, presence: true, numericality: { only_integer: true , less_than_or_equal_to: 5}
  # validates_associated :author
end
