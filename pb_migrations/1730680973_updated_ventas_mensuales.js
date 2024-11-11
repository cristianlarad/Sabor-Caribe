/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2569gxr4nsgc0mm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b3ef4yq0",
    "name": "semanas",
    "type": "text",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2569gxr4nsgc0mm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b3ef4yq0",
    "name": "dias",
    "type": "text",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
