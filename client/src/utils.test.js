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
  test.todo("Test negative scenarios");

  it("Throws an error for invalid gradeScale", () => {
    const corruptGradeScale = {};
    const mark = 70;
    const level = "Level 5";
    expect(() => getLetterGrade(corruptGradeScale, mark, level)).toThrow(
      "Grade scale not provided."
    );
  });
  it.each([
    ["A+", 5, 95],
    ["A", 5, 87],
    ["A-", 5, 83],
    ["B+", 5, 77],
    ["B", 5, 72],
    ["B-", 5, 67],
    ["C+", 5, 62],
    ["C", 5, 57],
    ["C-", 5, 52],
    ["D", 5, 45],
    ["E", 5, 35],
    ["A+", 6, 95],
    ["A", 6, 89],
    ["A-", 6, 82],
    ["B+", 6, 77],
    ["B", 6, 72],
    ["B-", 6, 67],
    ["C+", 6, 62],
    ["C", 6, 57],
    ["C-", 6, 52],
    ["D", 6, 45],
    ["E", 6, 35],
  ])(
    "should return %s when a valid %s and %s are entered",
    (letterGrade, level, mark) => {
      const result = getLetterGrade(gradeScale, level, mark);
      expect(result).toBe(letterGrade);
    }
  );

  it("should return an error message when invalid data type is used in input", () => {
    expect(() => getLetterGrade(4, "blah", "blah")).toThrow(
      "Invalid input: Input must be a valid gradeScale, mark and level"
    );
  });

  it("should return a letter as a string", () => {
    const result = getLetterGrade("A+", 5, 98);
    expect(typeof type === "string").toBe(true);
  });

  it("should test that a mark is greater than or equal to the minMark, and less than or equal to the maxMark", () => {
    const result = getLetterGrade([0], 5, 100);
    expect(result).toBe("A+");
  });
});
