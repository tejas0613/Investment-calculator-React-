import React, { useState } from "react";
import styles from './UserInput.module.css';

const UserInput = (props) => {

  const [currentSavings, setCurrentSavings] = useState('');
  const [yearlySavings, setYearlySavings] = useState('');
  const [interest, setInterest] = useState('');
  const [duration, setDuration] = useState('');
  
  const currSavingsChangeHandler = (event) => {
    setCurrentSavings(event.target.value);
  };
  const yearlySavingsChangeHandler = (event) => {
    setYearlySavings(event.target.value);
  };
  const interestChangeHandler = (event) => {
    setInterest(event.target.value);
  };
  const durationChangeHandler = (event) => {
    setDuration(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const userInput = {
      'current-savings': +currentSavings,
      'yearly-contribution': +yearlySavings,
      'expected-return': +interest,
      'duration': +duration
    };
    props.onAddInvestment(userInput);
  };

  const resetHandler = (event) => {
    event.preventDefault();
    setCurrentSavings('');
    setYearlySavings('');
    setInterest('');
    setDuration('');
  };


  return (
    <form onSubmit={formSubmitHandler} className={styles.form}>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input value={currentSavings} type="number" id="current-savings" onChange={currSavingsChangeHandler}/>
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input value={yearlySavings} type="number" id="yearly-contribution" onChange={yearlySavingsChangeHandler} />
        </p>
      </div>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input value={interest} type="number" id="expected-return" onChange={interestChangeHandler}/>
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input value={duration} type="number" id="duration" onChange={durationChangeHandler}/>
        </p>
      </div>
      <p className={styles.actions}>
        <button type="reset" className={styles.buttonAlt} onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
