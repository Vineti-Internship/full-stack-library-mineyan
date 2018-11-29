class AuthorSerializer < ActiveModel::Serializer
  # has_many :books
  attributes :id, :name, :username, :description, :books_count, :books

  def books_count 
    object&.books&.length
  end

end
