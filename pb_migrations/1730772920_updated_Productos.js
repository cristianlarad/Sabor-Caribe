/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bipvougqdspezvb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0no0gsrz",
    "name": "imagen",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bipvougqdspezvb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0no0gsrz",
    "name": "field",
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

  // update
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
})
