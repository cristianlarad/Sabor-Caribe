/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bipvougqdspezvb")

  collection.name = "Productos"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bipvougqdspezvb")

  collection.name = "productos"

  return dao.saveCollection(collection)
})
