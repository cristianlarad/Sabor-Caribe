/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hqm57bqs3yozpqf")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lbbairnb",
    "name": "dia",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "lunes",
        "martes",
        "miercoles",
        "jueves",
        "viernes",
        "sabado"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hqm57bqs3yozpqf")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lbbairnb",
    "name": "field",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "lunes",
        "martes",
        "miercoles",
        "jueves",
        "viernes",
        "sabado"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
