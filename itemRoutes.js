"use strict";

const express = require("express");

const db = require("./fakeDb");
const router = new express.Router();

/** return list of shopping item objects =>
 * { items: [
 * { name: "popsicle", price: 1.45 },
 * { name: "cheerios", price: 3.40 }
 * ]}
*/
router.get("/", function (req, resp) {
  return resp.send(db.items);
});

/** return single item */
router.get("/:name", function(req, resp) {
  let itemNameValue = req.params.name;
  for(let item of db.items){
    if(item.name === itemNameValue) {
      return resp.send(item);
    }
  }
});


/** accept JSON body, add item, and return it ==>
 * {name: "popsicle", price: 1.45} =>
  {added: {name: "popsicle", price: 1.45}}
*/
router.post("/", function(req, resp){
  db.items.push(req.body);
  return resp.send({
    added: req.body,
  });
} );

/** accept JSON body, modify item, return it */
router.patch("/:name");

/** delete item */
router.delete("/:name");

module.exports = router;