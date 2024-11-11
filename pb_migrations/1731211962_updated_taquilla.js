/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vofyfegx7ijihl8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2nyz35nt",
    "name": "dinero_recaudado",
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
  const collection = dao.findCollectionByNameOrId("vofyfegx7ijihl8")

  // remove
  collection.schema.removeField("2nyz35nt")

  return dao.saveCollection(collection)
})
