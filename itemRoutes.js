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


/** accept JSON body, add item, and return it */
router.get("/:name");

/** return single item */
router.post("/");

/** accept JSON body, modify item, return it */
router.patch("/:name");

/** delete item */
router.delete("/:name");

module.exports = router;