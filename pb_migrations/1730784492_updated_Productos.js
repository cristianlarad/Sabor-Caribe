/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bipvougqdspezvb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qlws66m4",
    "name": "video",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bipvougqdspezvb")

  // remove
  collection.schema.removeField("qlws66m4")

  return dao.saveCollection(collection)
})
