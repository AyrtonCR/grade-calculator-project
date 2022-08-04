const getLetterGrade = (gradeScale, mark, level) => {
  if (!Array.isArray(gradeScale) || !gradeScale.length) {
    throw new Error("Grade scale not provided.");
  }
  if (level === "Level 5" || level === "Level 6") {
    if (mark >= 0 && mark <= 100) {
      const filterFunction = gradeScale.filter(
        (singleGrade) =>
          level === singleGrade.level &&
          mark >= singleGrade.minMark &&
          mark <= singleGrade.maxMark
      );
      const grade = filterFunction.map((newGrade) => newGrade.grade).toString();
      return grade;
    } else {
      throw new Error("Mark must be valid: A Number between 0 and 100");
    }
  } else {
    throw new Error("Level must only be either Level 5 or Level 6");
  }
};

module.exports = { getLetterGrade };
