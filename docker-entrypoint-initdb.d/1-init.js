db = db.getSiblingDB("testdb")
// db.users.drop()
db.users.insertMany([
  {
    name: "John Doe2",
    age: 30,
    email: "john.doe@example.com",
  },
  {
    name: "Jane Doe",
    age: 25,
    email: "jane.doe@example.com",
  },
])

print("Users collection created and populated with initial data.")
