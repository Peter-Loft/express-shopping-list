"use strict";
/** Simple demo Express app. */

const express = require("express");
const app = express();
const itemRoutes = require("./itemRoutes");

// Get a middleware function and register it for all routes
app.use(express.json());

app.use("/items", itemRoutes);


module.exports = app;