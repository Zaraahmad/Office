const express = require("express");
const router = express.Router();
const db = require("../models");

// get all departments
router.get("/all", (req, res) => {
  db.departments.findAll().then(department => res.send(department));
});

// get single department by id
// http://localhost:3000/api/find/2
router.get("/find/:id", (req, res) => {
    db.departments.findAll({
      where: {
        id: req.params.id
      }
    }).then(departments => res.send(departments));
  });
  

// post new department
router.post("/new", (req, res) => {
    db.departments.create({
      name: req.body.name
    }).then(submiteddepartment => res.send(submiteddepartment));
  });

// delete department
router.delete("/delete/:id", (req, res) => {
    db.departments.destroy({
      where: {
        id: req.params.id
      }
    }).then(() => res.send("success"));
  });
  
  // edit a department
  router.put("/edit", (req, res) => {
    db.departments.update(
      {
        name: req.body.name
      },
      {
        where: { id: req.body.id }
      }
    ).then(() => res.send("success"));
  });
  

module.exports = router;