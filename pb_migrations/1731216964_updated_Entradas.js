/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4luh64ho5gr7z7g")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "djipjl0e",
    "name": "disponible",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4luh64ho5gr7z7g")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "djipjl0e",
    "name": "disponible",
    "type": "bool",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
