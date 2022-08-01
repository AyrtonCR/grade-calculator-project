import { getLetterGrade } from "./utils";

const gradeScale = [
  {
    level: "Level 5",
    minMark: 90,
    maxMark: 100,
    grade: "A+",
  },
  {
    level: "Level 5",
    minMark: 85,
    maxMark: 89,
    grade: "A",
  },
  {
    level: "Level 5",
    minMark: 80,
    maxMark: 84,
    grade: "A-",
  },
  {
    level: "Level 5",
    minMark: 75,
    maxMark: 79,
    grade: "B+",
  },
  {
    level: "Level 5",
    minMark: 70,
    maxMark: 74,
    grade: "B",
  },
  {
    level: "Level 5",
    minMark: 65,
    maxMark: 69,
    grade: "B-",
  },
  {
    level: "Level 5",
    minMark: 60,
    maxMark: 64,
    grade: "C+",
  },
  {
    level: "Level 5",
    minMark: 55,
    maxMark: 59,
    grade: "C",
  },
  {
    level: "Level 5",
    minMark: 50,
    maxMark: 54,
    grade: "C-",
  },
  {
    level: "Level 5",
    minMark: 40,
    maxMark: 49,
    grade: "D",
  },
  {
    level: "Level 5",
    minMark: 0,
    maxMark: 39,
    grade: "E",
  },
  {
    level: "Level 6",
    minMark: 92,
    maxMark: 100,
    grade: "A+",
  },
  {
    level: "Level 6",
    minMark: 85,
    maxMark: 91,
    grade: "A",
  },
  {
    level: "Level 6",
    minMark: 80,
    maxMark: 84,
    grade: "A-",
  },
  {
    level: "Level 6",
    minMark: 75,
    maxMark: 79,
    grade: "B+",
  },
  {
    level: "Level 6",
    minMark: 70,
    maxMark: 74,
    grade: "B",
  },
  {
    level: "Level 6",
    minMark: 65,
    maxMark: 69,
    grade: "B-",
  },
  {
    level: "Level 6",
    minMark: 60,
    maxMark: 64,
    grade: "C+",
  },
  {
    level: "Level 6",
    minMark: 55,
    maxMark: 59,
    grade: "C",
  },
  {
    level: "Level 6",
    minMark: 50,
    maxMark: 54,
    grade: "C-",
  },
  {
    level: "Level 6",
    minMark: 40,
    maxMark: 49,
    grade: "D",
  },
  {
    level: "Level 6",
    minMark: 0,
    maxMark: 39,
    grade: "E",
  },
];

describe("getLetterGrade", () => {
  test.todo("Test happy path scenarios");

  it("should return a letter as a string", () => {
    const result = getLetterGrade("A+", 5, 98);
    expect(typeof result === "string").toBe(true);
  });

  it("should test that a mark is greater than or equal to the minMark, and less than or equal to the maxMark", () => {
    const result = getLetterGrade([0], 5, 100);
    expect(result).toBe("A+");
  });

  it.each([
    [gradeScale, "Level 5", 95],
    [gradeScale, "Level 5", 87],
    [gradeScale, "Level 5", 83],
    [gradeScale, "Level 5", 77],
    [gradeScale, "Level 5", 72],
    [gradeScale, "Level 5", 67],
    [gradeScale, "Level 5", 62],
    [gradeScale, "Level 5", 57],
    [gradeScale, "Level 5", 52],
    [gradeScale, "Level 5", 45],
    [gradeScale, "Level 5", 35],
    [gradeScale, "Level 6", 95],
    [gradeScale, "Level 6", 89],
    [gradeScale, "Level 6", 82],
    [gradeScale, "Level 6", 77],
    [gradeScale, "Level 6", 72],
    [gradeScale, "Level 6", 67],
    [gradeScale, "Level 6", 62],
    [gradeScale, "Level 6", 57],
    [gradeScale, "Level 6", 52],
    [gradeScale, "Level 6", 45],
    [gradeScale, "Level 6", 35],
  ])(
    "should return a the correct 'Grade' when a valid 'Level' and a valid 'Mark' are entered",
    (gradeScale, level, mark) => {
      const result = getLetterGrade(gradeScale, level, mark);
      const expectedResult = gradeScale.filter(
        (singleGrade) =>
          level === singleGrade.level &&
          mark >= singleGrade.minMark &&
          mark <= singleGrade.maxMark
      );
      expect(result).toEqual(expectedResult.map((newGrade) => newGrade.grade));
    }
  );

  test.todo("Test negative scenarios");

  it("Throws an error for invalid gradeScale", () => {
    const corruptGradeScale = {};
    const mark = 70;
    const level = "Level 5";
    expect(() => getLetterGrade(corruptGradeScale, mark, level)).toThrow(
      "Grade scale not provided."
    );
  });

  it("should return an error message when invalid data type is used in input", () => {
    expect(() => getLetterGrade(4, "blah", "blah")).toThrow(
      "Invalid input: Input must be a valid gradeScale, mark and level"
    );
  });
});
