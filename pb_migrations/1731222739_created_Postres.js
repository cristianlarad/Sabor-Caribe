/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "0np0jj7cvz90knn",
    "created": "2024-11-10 07:12:19.426Z",
    "updated": "2024-11-10 07:12:19.426Z",
    "name": "Postres",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "8harb8em",
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
      },
      {
        "system": false,
        "id": "vulkgmhd",
        "name": "precio",
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
  const collection = dao.findCollectionByNameOrId("0np0jj7cvz90knn");

  return dao.deleteCollection(collection);
})
