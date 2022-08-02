const express = require("express");
const router = express.Router();
const db = require("./db");

router.get("/", async (req, res, next) => {
  try {
    const result = await db.query(
      `SELECT
        level AS "Level",
        min_mark AS "minMark",
        max_mark AS "maxMark",
        grade AS "Grade"
      FROM grade_scale 
      ORDER BY
        id
      `
    );
    const gradeScale = result.rows;
    return res.json(gradeScale);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
