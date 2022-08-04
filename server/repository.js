const { Pool } = require("pg");
const db = require("./db");

module.exports = {
  getGradeScale: async () => {
    try {
      const result = await db.query(
        `SELECT 
       level, 
       min_mark AS "minMark",
       max_mark AS "maxMark",
       grade
    FROM grade_scale
    ORDER BY id`
      );
      return result.rows;
    } catch (error) {
      throw Error(error);
    }
  },
};
