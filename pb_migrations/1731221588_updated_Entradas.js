/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4luh64ho5gr7z7g")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b11mf2iy",
    "name": "valoracion",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 5,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4luh64ho5gr7z7g")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b11mf2iy",
    "name": "valoracion",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 5,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
})
