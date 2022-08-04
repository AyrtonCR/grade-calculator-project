const express = require("express");
const router = express.Router();
const repository = require("./repository");

router.get("/", async (req, res) => {
  try {
    const allGrades = await repository.getGradeScale();
    res.json(allGrades);
  } catch (error) {
    throw Error(error);
  }
});

module.exports = router;
