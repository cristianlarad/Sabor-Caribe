/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bipvougqdspezvb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "itegdoz7",
    "name": "descripcion",
    "type": "editor",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bipvougqdspezvb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "itegdoz7",
    "name": "descripcion",
    "type": "editor",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  return dao.saveCollection(collection)
})
