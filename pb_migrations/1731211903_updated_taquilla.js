/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vofyfegx7ijihl8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l0hr9x2r",
    "name": "relacion",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "bipvougqdspezvb",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lnymbwow",
    "name": "ventas_en_un_ano",
    "type": "number",
    "required": true,
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
  const collection = dao.findCollectionByNameOrId("vofyfegx7ijihl8")

  // remove
  collection.schema.removeField("l0hr9x2r")

  // remove
  collection.schema.removeField("lnymbwow")

  return dao.saveCollection(collection)
})
