const express = require("express");
const routerUser = require("./routers/user.router");
const routerCiti = require("./routers/citi.routers");
const router = express.Router();

// colocar las rutas aquí
router.use("/users", routerUser);
router.use("/citis", routerCiti);

module.exports = router;
