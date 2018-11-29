class BookSerializer < ActiveModel::Serializer
  has_one :author
  attributes :id, :title, :rating, :description, :added, :author

  def added
    "#{object&.created_at&.day}.#{object&.created_at&.month}.#{object&.created_at&.year}."
  end

  def author 
    object&.author&.name
  end

  # def rating
  #   return 0
  # end
  
end
