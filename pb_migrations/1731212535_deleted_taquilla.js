/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("vofyfegx7ijihl8");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "vofyfegx7ijihl8",
    "created": "2024-11-10 04:10:47.629Z",
    "updated": "2024-11-10 04:16:08.750Z",
    "name": "taquilla",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
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
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
