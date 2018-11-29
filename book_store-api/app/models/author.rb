class Author < ApplicationRecord
  has_many :books, dependent: :destroy #  when we delete an author, all the books linked to this author are being deleted as well
  validates :username, 
             uniqueness: true,
             presence: true, 
             length: { in: 2..50 } 
  validates :name,
             presence: true,
             length:  { in: 2..255 },
             format: { with: /\A[a-zA-Z\s]+\z/ }
  validates :description,
             presence: true,
             length: { minimum: 5 }
             
  # validates_associated :author
end
