const { Pool } = require("pg");
const db = require("./db");

module.exports = {
  getGradeScale: async () => {
    try {
      const result = await Pool.query(
    `SELECT 
       level AS "Level", 
       min_mark AS "minMark",
       max_mark AS "maxMark",
       grade AS "Grade",
    FROM grade_scale`
      );
      return result.rows;
    } catch (error) {
      throw Error(error);
    }
  },
};
