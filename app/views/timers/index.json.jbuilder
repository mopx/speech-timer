json.array!(@timers) do |timer|
  json.extract! timer, :id, :name, :minutes
  json.url timer_url(timer, format: :json)
end
