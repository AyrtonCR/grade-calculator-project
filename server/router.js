const express = require("express");
const router = express.Router();
const repository = require("./repository");

router.get("/", async (req, res, next) => {
  try {
    const allGrades = await repository.getGradeScale();
    res.json(allGrades);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
