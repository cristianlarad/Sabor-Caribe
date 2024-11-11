/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bipvougqdspezvb")

  // remove
  collection.schema.removeField("qkq3ba62")

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
      "mimeTypes": [
        "video/mp4",
        "video/x-msvideo",
        "video/x-matroska",
        "video/mpeg"
      ],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "odq3i13u",
    "name": "ventas_desde_salida",
    "type": "file",
    "required": true,
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qkq3ba62",
    "name": "video",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880000,
      "protected": false
    }
  }))

  // remove
  collection.schema.removeField("qlws66m4")

  // remove
  collection.schema.removeField("odq3i13u")

  return dao.saveCollection(collection)
})
