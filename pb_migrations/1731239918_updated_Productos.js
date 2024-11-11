/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bipvougqdspezvb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qlws66m4",
    "name": "video",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "video/mp4",
        "video/x-msvideo",
        "video/x-matroska",
        "video/mpeg"
      ],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5000242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bipvougqdspezvb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qlws66m4",
    "name": "video",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "video/mp4",
        "video/x-msvideo",
        "video/x-matroska",
        "video/mpeg"
      ],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 500242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})
