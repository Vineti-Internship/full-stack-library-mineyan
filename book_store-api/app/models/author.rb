class Author < ApplicationRecord
  has_many :books, dependent: :destroy #  when we delete an author, all the books linked to this author are being deleted as well
  validates :username, presence: true, length: { minimum: 2 } 
end
