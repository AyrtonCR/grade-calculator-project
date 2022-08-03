const { Pool } = require("pg");
const db = require("./db");

module.exports = {
  getGradeScale: async () => {
    try {
      const result = await Pool.query(
    `SELECT 
       level AS "level", 
       min_mark AS "minMark",
       max_mark AS "maxMark",
       grade AS "grade",
    FROM grade_scale`
      );
      return result.rows;
    } catch (error) {
      throw Error(error);
    }
  },
};
