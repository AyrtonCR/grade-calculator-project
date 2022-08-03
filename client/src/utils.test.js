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
  ////////////////////////////////////////////////////////////////////////////////
  it("should return a string", () => {
    const result = getLetterGrade(gradeScale, 98, "Level 5");
    expect(typeof result === "string").toBe(true);
  });

  it("should test that the highest possible mark is an A+", () => {
    const result = getLetterGrade(gradeScale, 100, "Level 6");
    expect(result).toEqual("A+");
  });

  it("should test that the lowest possible mark is an E", () => {
    const result = getLetterGrade(gradeScale, 0, "Level 6");
    expect(result).toEqual("E");
  });

  it.each([
    [gradeScale, 100, "Level 5"],
    [gradeScale, 90, "Level 5"],
    [gradeScale, 89, "Level 5"],
    [gradeScale, 85, "Level 5"],
    [gradeScale, 84, "Level 5"],
    [gradeScale, 80, "Level 5"],
    [gradeScale, 79, "Level 5"],
    [gradeScale, 75, "Level 5"],
    [gradeScale, 74, "Level 5"],
    [gradeScale, 70, "Level 5"],
    [gradeScale, 69, "Level 5"],
    [gradeScale, 65, "Level 5"],
    [gradeScale, 64, "Level 5"],
    [gradeScale, 60, "Level 5"],
    [gradeScale, 59, "Level 5"],
    [gradeScale, 55, "Level 5"],
    [gradeScale, 54, "Level 5"],
    [gradeScale, 50, "Level 5"],
    [gradeScale, 49, "Level 5"],
    [gradeScale, 40, "Level 5"],
    [gradeScale, 39, "Level 5"],
    [gradeScale, 0, "Level 5"],
    [gradeScale, 100, "Level 6"],
    [gradeScale, 92, "Level 6"],
    [gradeScale, 91, "Level 6"],
    [gradeScale, 85, "Level 6"],
    [gradeScale, 84, "Level 6"],
    [gradeScale, 80, "Level 6"],
    [gradeScale, 79, "Level 6"],
    [gradeScale, 75, "Level 6"],
    [gradeScale, 74, "Level 6"],
    [gradeScale, 70, "Level 6"],
    [gradeScale, 69, "Level 6"],
    [gradeScale, 65, "Level 6"],
    [gradeScale, 64, "Level 6"],
    [gradeScale, 60, "Level 6"],
    [gradeScale, 59, "Level 6"],
    [gradeScale, 55, "Level 6"],
    [gradeScale, 54, "Level 6"],
    [gradeScale, 50, "Level 6"],
    [gradeScale, 49, "Level 6"],
    [gradeScale, 40, "Level 6"],
    [gradeScale, 39, "Level 6"],
    [gradeScale, 0, "Level 6"],
  ])(
    "should return the correct 'Grade' when a valid 'Level' and a valid 'Mark' are entered by testing the start and end points of each grade bracket",
    (gradeScale, mark, level) => {
      const result = getLetterGrade(gradeScale, mark, level);
      const expectedResult = gradeScale.filter(
        (singleGrade) =>
          level === singleGrade.level &&
          mark >= singleGrade.minMark &&
          mark <= singleGrade.maxMark
      );
      expect(result).toEqual(
        expectedResult.map((newGrade) => newGrade.grade).toString()
      );
    }
  );

  test.todo("Test negative scenarios");
  /////////////////////////////////////////////////////////////////////////////////////////////

  it("Throws an error for invalid gradeScale", () => {
    const corruptGradeScale = {};
    const mark = 70;
    const level = "Level 5";
    expect(() => getLetterGrade(corruptGradeScale, mark, level)).toThrow(
      "Grade scale not provided."
    );
  });

  it("should return an error message when invalid data is placed in the Level input", () => {
    const testMark = 4;
    const testLevel = "Level 27";
    expect(() => getLetterGrade(gradeScale, testMark, testLevel)).toThrow(
      "Level must only be either Level 5 or Level 6"
    );
  });

  it("should return an error message when an invalid value is placed in the Mark input", () => {
    const testMark = 102;
    const testLevel = "Level 5";
    expect(() => getLetterGrade(gradeScale, testMark, testLevel)).toThrow(
      "Mark must be valid: A Number between 0 and 100"
    );
  });

  it("should return an error message when an empty object is placed in the Mark input", () => {
    const testMark = {};
    const testLevel = "Level 5";
    expect(() => getLetterGrade(gradeScale, testMark, testLevel)).toThrow(
      "Mark must be valid: A Number between 0 and 100"
    );
    // expect(result).toBe("Mark must be valid: Between 0 and 100");
  });

  it("should return an error message when a string is placed in the Mark input", () => {
    const testMark = "This is a string";
    const testLevel = "Level 5";
    expect(() => getLetterGrade(gradeScale, testMark, testLevel)).toThrow(
      "Mark must be valid: A Number between 0 and 100"
    );
  });
});
