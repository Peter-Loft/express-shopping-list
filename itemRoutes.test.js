"use strict";

const request = require("supertest");
const itemRoutes = require("./itemRoutes");
const db = require("./fakeDb");
const app = require("./app");

/** Because we use fake database, the data will not be changed or updated, 
 *  so we will not use beforeEach and afterEach function here.
 */ 

describe("GET /items", function() {
    it("Gets a food list", async function(){
        const resp = await request(app).get("/items");

        expect(resp.body).toEqual([{ name: "popsicle", price: 1.45 },
        { name: "cheerios", price: 3.40 }
        ]);
    });
});