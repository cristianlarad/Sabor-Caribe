/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "vofyfegx7ijihl8",
    "created": "2024-11-10 04:10:47.629Z",
    "updated": "2024-11-10 04:10:47.629Z",
    "name": "taquilla",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ycyjtdvd",
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("vofyfegx7ijihl8");

  return dao.deleteCollection(collection);
})
