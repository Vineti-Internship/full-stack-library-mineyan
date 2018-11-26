class AuthorSerializer < ActiveModel::Serializer
  # has_many :books

  attributes :id, :username, :books
end
