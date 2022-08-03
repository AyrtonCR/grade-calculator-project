import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import { getLetterGrade } from "../utils";
import styles from "./GradeConverterForm.module.css";

const GradeConverterForm = ({ gradeScale }) => {
  const [level, setLevel] = useState("Level 5");
  const [mark, setMark] = useState(0);
  const [grade, setGrade] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const letterGrade = getLetterGrade(gradeScale, mark, level);
      setGrade(letterGrade);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <div>
        <h2 className={styles.instruction}>
          Enter the students Level and Mark below ...
        </h2>
      </div>
      <form className={styles.mainForm} onSubmit={handleSubmit}>
        <label htmlFor="level">Level </label>
        <select
          className={styles.mainFormSelect}
          id="level"
          value={level}
          onChange={(e) => {
            setGrade("");
            setLevel(e.target.value);
          }}
        >
          <option value="Level 5">5</option>
          <option value="Level 6">6</option>
        </select>
        <label htmlFor="mark"> Mark </label>
        <input
          className={styles.mainFormNumber}
          id="mark"
          type="number"
          value={mark}
          onChange={(e) => {
            setGrade("");
            setMark(Number(e.target.value));
          }}
        />
        <div className={styles.buttonContainer}>
          <button className={styles.mainFormButton}>Get Grade</button>
        </div>
        {errorMessage && (
          <ErrorMessage className={styles.errorClass} message={errorMessage} />
        )}

        {grade && (
          <div className={styles.gradeResultContainer}>
            <p className={styles.gradeResult}>
              This {level} student with a Mark of {mark} will achieve a Grade of{" "}
              {grade}.
            </p>{" "}
          </div>
        )}
      </form>
    </>
  );
};

export default GradeConverterForm;
