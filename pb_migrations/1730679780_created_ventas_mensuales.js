/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "2569gxr4nsgc0mm",
    "created": "2024-11-04 00:23:00.403Z",
    "updated": "2024-11-04 00:23:00.403Z",
    "name": "ventas_mensuales",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
        "system": false,
        "id": "9ouv5nh2",
        "name": "ventas",
        "type": "number",
        "required": false,
        "presentable": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "3p7ridkz",
        "name": "ganancias",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("2569gxr4nsgc0mm");

  return dao.deleteCollection(collection);
})
