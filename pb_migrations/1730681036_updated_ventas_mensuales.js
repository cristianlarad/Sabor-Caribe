/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2569gxr4nsgc0mm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n5ow3dtq",
    "name": "inversion",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2569gxr4nsgc0mm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n5ow3dtq",
    "name": "perdidas",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
})
