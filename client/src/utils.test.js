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
  it("should return an array", () => {
    const result = getLetterGrade(gradeScale, "Level 5", 98);
    expect(Array.isArray(result)).toBe(true);
  });

  it("should test that the highest possible mark is an A+", () => {
    const result = getLetterGrade(gradeScale, "Level 6", 100);
    expect(result).toEqual(["A+"]);
  });

  it("should test that the lowest possible mark is an E", () => {
    const result = getLetterGrade(gradeScale, "Level 6", 0);
    expect(result).toEqual(["E"]);
  });

  it.each([
    [gradeScale, "Level 5", 100],
    [gradeScale, "Level 5", 90],
    [gradeScale, "Level 5", 89],
    [gradeScale, "Level 5", 85],
    [gradeScale, "Level 5", 84],
    [gradeScale, "Level 5", 80],
    [gradeScale, "Level 5", 79],
    [gradeScale, "Level 5", 75],
    [gradeScale, "Level 5", 74],
    [gradeScale, "Level 5", 70],
    [gradeScale, "Level 5", 69],
    [gradeScale, "Level 5", 65],
    [gradeScale, "Level 5", 64],
    [gradeScale, "Level 5", 60],
    [gradeScale, "Level 5", 59],
    [gradeScale, "Level 5", 55],
    [gradeScale, "Level 5", 54],
    [gradeScale, "Level 5", 50],
    [gradeScale, "Level 5", 49],
    [gradeScale, "Level 5", 40],
    [gradeScale, "Level 5", 39],
    [gradeScale, "Level 5", 0],
    [gradeScale, "Level 6", 100],
    [gradeScale, "Level 6", 92],
    [gradeScale, "Level 6", 91],
    [gradeScale, "Level 6", 85],
    [gradeScale, "Level 6", 84],
    [gradeScale, "Level 6", 80],
    [gradeScale, "Level 6", 79],
    [gradeScale, "Level 6", 75],
    [gradeScale, "Level 6", 74],
    [gradeScale, "Level 6", 70],
    [gradeScale, "Level 6", 69],
    [gradeScale, "Level 6", 65],
    [gradeScale, "Level 6", 64],
    [gradeScale, "Level 6", 60],
    [gradeScale, "Level 6", 59],
    [gradeScale, "Level 6", 55],
    [gradeScale, "Level 6", 54],
    [gradeScale, "Level 6", 50],
    [gradeScale, "Level 6", 49],
    [gradeScale, "Level 6", 40],
    [gradeScale, "Level 6", 39],
    [gradeScale, "Level 6", 0],
  ])(
    "should return the correct 'Grade' when a valid 'Level' and a valid 'Mark' are entered by testing the start and end points of each grade bracket",
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
    const result = getLetterGrade(gradeScale, testLevel, testMark);
    expect(result).toBe("Level must only be either Level 5 or Level 6");
  });

  it("should return an error message when an invalid value is placed in the Mark input", () => {
    const testMark = 102;
    const testLevel = "Level 5";
    const result = getLetterGrade(gradeScale, testLevel, testMark);
    expect(result).toBe("Mark must be valid: Between 0 and 100");
  });

  it("should return an error message when an empty object is placed in the Mark input", () => {
    const testMark = {};
    const testLevel = "Level 5";
    const result = getLetterGrade(gradeScale, testLevel, testMark);
    expect(result).toBe("Mark must be valid: Between 0 and 100");
  });

  it("should return an error message when a string is placed in the Mark input", () => {
    const testMark = "This is a string";
    const testLevel = "Level 5";
    const result = getLetterGrade(gradeScale, testLevel, testMark);
    expect(result).toBe("Mark must be valid: Between 0 and 100");
  });

  // it("should check that the Grade is a valid Grade", () => {
  //   const testMark = 99;
  //   const testLevel = "Level 5";
  //   const result = getLetterGrade(gradeScale, testLevel, testMark);
  //   expect(result).toEqual(
  //     ["A+"] || ["A"] || ["A-"] || ["B+"] || ["B"] || ["B-"] || ["C+"] || [
  //         "C",
  //       ] || ["C-"] || ["D"] || ["E"]
  //   );
  // });
});
