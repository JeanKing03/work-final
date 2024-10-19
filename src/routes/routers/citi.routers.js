const express = require("express");
const {
  create,
  getAll,
  getOne,
  update,
  remove,
} = require("../../controllers/citi.controllers");
const verifyJWT = require("../../utils/verifyJWT");

const routerCiti = express.Router();

routerCiti.route("/").post(verifyJWT, create).get(getAll);
routerCiti
  .route("/:id")
  .get(verifyJWT, getOne)
  .put(verifyJWT, update)
  .delete(verifyJWT, remove);

module.exports = routerCiti;
