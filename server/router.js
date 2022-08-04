const express = require("express");
const router = express.Router();
const repository = require("./repository");

router.get("/", async (req, res) => {
  const allGrades = await repository.getGradeScale();
  res.json(allGrades);
});

module.exports = router;
