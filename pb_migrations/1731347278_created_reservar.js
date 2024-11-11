/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "hqm57bqs3yozpqf",
    "created": "2024-11-11 17:47:58.156Z",
    "updated": "2024-11-11 17:47:58.156Z",
    "name": "reservar",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("hqm57bqs3yozpqf");

  return dao.deleteCollection(collection);
})
