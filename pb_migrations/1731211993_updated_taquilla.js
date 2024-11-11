/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vofyfegx7ijihl8")

  // remove
  collection.schema.removeField("ycyjtdvd")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vofyfegx7ijihl8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ycyjtdvd",
    "name": "nombre",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
