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
  it("should check that when the getLetterGrade function is run, it will return an item from the array that has been converted to a string", () => {
    const result = getLetterGrade(gradeScale, 98, "Level 5");
    expect(typeof result === "string").toBe(true);
  });

  it("should check that when the getLetterGrade function is run with a Mark of 100 at Level 6 which is the highest possible score, an A+ is returned", () => {
    const result = getLetterGrade(gradeScale, 100, "Level 6");
    expect(result).toEqual("A+");
  });

  it("should check that when the getLetterGrade function is run with a Mark of 0 at Level 6 which is the lowest possible score, an E is returned", () => {
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
    "should check that when the getLetterGrade function is run, it will return the correct 'Grade' when a valid 'Level' and a valid 'Mark' are entered by testing the start and end points of each grade bracket, and checking them against the test grade scale. It should return a grade correctly formatted as a string and not an array",
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
  it("should check that when the getLetterGrade function is run with an empty object as the gradeScale, it will throw an error that says Grade scale not provided", () => {
    const corruptGradeScale = {};
    const mark = 70;
    const level = "Level 5";
    expect(() => getLetterGrade(corruptGradeScale, mark, level)).toThrow(
      "Grade scale not provided."
    );
  });

  it("should check that when the getLetterGrade function is run with a Level that is not Level 5 or Level 6, an error message is returned that says Level must only be either Level 5 or Level 6", () => {
    const testMark = 4;
    const testLevel = "Level 27";
    expect(() => getLetterGrade(gradeScale, testMark, testLevel)).toThrow(
      "Level must only be either Level 5 or Level 6"
    );
  });

  it("should check that when the getLetterGrade function is run with an empty object as the level, an error message is returned that says Level must only be either Level 5 or Level 6", () => {
    const testMark = 4;
    const testLevel = {};
    expect(() => getLetterGrade(gradeScale, testMark, testLevel)).toThrow(
      "Level must only be either Level 5 or Level 6"
    );
  });

  it("should check that when the getLetterGrade function is run with a number as a string inputted for the Level, an error message is returned that says Level must only be either Level 5 or Level 6", () => {
    const testMark = 4;
    const testLevel = "5";
    expect(() => getLetterGrade(gradeScale, testMark, testLevel)).toThrow(
      "Level must only be either Level 5 or Level 6"
    );
  });

  it("should check that when the getLetterGrade function is run with just a number inputted for the Level, an error message is returned that says Level must only be either Level 5 or Level 6", () => {
    const testMark = 4;
    const testLevel = 5;
    expect(() => getLetterGrade(gradeScale, testMark, testLevel)).toThrow(
      "Level must only be either Level 5 or Level 6"
    );
  });

  it("should check that when the getLetterGrade function is run with a mark that is greater than 100, an error message is returned that says Mark must be valid: A Number between 0 and 100", () => {
    const testMark = 102;
    const testLevel = "Level 5";
    expect(() => getLetterGrade(gradeScale, testMark, testLevel)).toThrow(
      "Mark must be valid: A Number between 0 and 100"
    );
  });

  it("should check that when the getLetterGrade function is run with a mark that is less than than 0, an error message is returned that says Mark must be valid: A Number between 0 and 100", () => {
    const testMark = -54;
    const testLevel = "Level 5";
    expect(() => getLetterGrade(gradeScale, testMark, testLevel)).toThrow(
      "Mark must be valid: A Number between 0 and 100"
    );
  });

  it("should check that when the getLetterGrade function is run with an empty object inputted for the mark, it will return an error message that says Mark must be valid: A Number between 0 and 100", () => {
    const testMark = {};
    const testLevel = "Level 5";
    expect(() => getLetterGrade(gradeScale, testMark, testLevel)).toThrow(
      "Mark must be valid: A Number between 0 and 100"
    );
  });

  it("should check that when the getLetterGrade function is run with a string inputted for the mark, it will return an error message that says Mark must be valid: A Number between 0 and 100", () => {
    const testMark = "This is a string";
    const testLevel = "Level 5";
    expect(() => getLetterGrade(gradeScale, testMark, testLevel)).toThrow(
      "Mark must be valid: A Number between 0 and 100"
    );
  });
});
