const getLetterGrade = (gradeScale, level, mark) => {
  if (!Array.isArray(gradeScale) || !gradeScale.length) {
    throw new Error("Grade scale not provided.");
  }
  if (level === "Level 5" || level === "Level 6") {
    if (mark >= 0 && mark <= 100) {
      const letterGrade = gradeScale.filter(
        (singleGrade) =>
          level === singleGrade.level &&
          mark >= singleGrade.minMark &&
          mark <= singleGrade.maxMark
      );

      return level && letterGrade.map((newGrade) => newGrade.grade);
    } else return "Mark must be valid: Between 0 and 100";
  } else return "Level must only be either Level 5 or Level 6";
};

module.exports = { getLetterGrade };
