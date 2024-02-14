db = db.getSiblingDB("hogehoge")
//db.users.createIndex({ name: 1 }, { unique: true })
db.users.insertMany([
  {
    name: "hoge",
    age: 130,
    email: "hoge@example.com",
  },
])

print("hogehoge")
