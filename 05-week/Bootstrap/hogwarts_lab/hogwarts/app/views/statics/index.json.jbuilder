json.array!(@statics) do |static|
  json.extract! static, :id, :about, :contact, :help
  json.url static_url(static, format: :json)
end
