class Timer < ActiveRecord::Base
  validates :name, presence: true
  validates :minutes, presence: true, numericality: true
end
