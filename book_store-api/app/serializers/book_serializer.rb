class BookSerializer < ActiveModel::Serializer
  has_one :author
  attributes :id, :title, :rating


  
end
