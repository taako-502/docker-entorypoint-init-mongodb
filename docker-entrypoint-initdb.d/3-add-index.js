db = db.getSiblingDB("testdb")
//db.users.createIndex({ name: 1 }, { unique: true })
db.users.createIndex({ name: 1 }, { unique: true })
