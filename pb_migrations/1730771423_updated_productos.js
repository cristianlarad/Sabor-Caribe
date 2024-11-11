/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bipvougqdspezvb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "itegdoz7",
    "name": "field2",
    "type": "editor",
    "required": true,
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

  // remove
  collection.schema.removeField("itegdoz7")

  return dao.saveCollection(collection)
})
