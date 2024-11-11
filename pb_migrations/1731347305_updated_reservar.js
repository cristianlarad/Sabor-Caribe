/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hqm57bqs3yozpqf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hoonghqb",
    "name": "personas",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 10,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hqm57bqs3yozpqf")

  // remove
  collection.schema.removeField("hoonghqb")

  return dao.saveCollection(collection)
})
