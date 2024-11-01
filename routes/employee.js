const express = require("express");
const router = express.Router();
const controller = require("../controller/employee.controller");
const { body } = require("express-validator");

// GET findAll
router.get("/", controller.findAll);

//GET findOne
router.get("/:id", controller.findOne);

//POST
router.post("/", controller.create);

//PUT
router.put("/:id", controller.update);

//DELETE
router.delete("/:id", controller.remove);

module.exports = router;
