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
    "required": false,
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0uacxlro",
    "name": "fecha_y_hora",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hoonghqb",
    "name": "personas",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 10,
      "noDecimal": false
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "anuax9rf",
    "name": "nombre",
    "type": "text",
    "required": false,
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0uacxlro",
    "name": "fecha_y_hora",
    "type": "date",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // update
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

  // update
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
})
