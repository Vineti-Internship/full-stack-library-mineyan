class AddDescriptionToAuthors < ActiveRecord::Migration[5.2]
  def change
    add_column :authors, :description, :string
  end
end
