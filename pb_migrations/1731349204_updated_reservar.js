/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hqm57bqs3yozpqf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "anuax9rf",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hqm57bqs3yozpqf")

  // remove
  collection.schema.removeField("anuax9rf")

  return dao.saveCollection(collection)
})
