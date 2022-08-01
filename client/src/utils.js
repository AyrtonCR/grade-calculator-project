const getLetterGrade = (gradeScale, level, mark) => {
  if (!Array.isArray(gradeScale) || !gradeScale.length) {
    throw new Error("Grade scale not provided.");
  }

  const letterGrade = gradeScale.filter(
    (singleGrade) =>
      level === singleGrade.level &&
      mark >= singleGrade.minMark &&
      mark <= singleGrade.maxMark
  );

  return letterGrade.map((newGrade) => newGrade.grade);
};

module.exports = { getLetterGrade };
