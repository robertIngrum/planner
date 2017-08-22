class Event < ActiveRecord::Base
  field :name, type: String
  field :description, type: Text
  field :timestamps, type: DateTime
end
