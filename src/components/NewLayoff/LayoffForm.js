import React, { useState } from "react";
import './LayoffForm.css';

const LayoffForm = (props) => {
    //Using multiple states
    const [enteredCompany, setEnteredCompany] = useState('');
    const [enteredCount, setEnteredCount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    //using single state
    // const [userInput, setUserInput] = useState({
    //     enteredCompany: '',
    //     enteredCount: '',
    //     enteredDate: ''
    // });



    const companyChangeHandler = (event) => {
        //Using multiple states
        setEnteredCompany(event.target.value);

        //Using single state
        // setUserInput({
        //     ...userInput,
        //     enteredCompany: event.target.value,
        // });

        //It is better to use below approach because generally react schedules 
        //the state updation, so if u use function based approach it will immediately 
        //updtae the values(So use function based approach whenever we depend on prev state)

        // setUserInput((prevState) => {
        //     return { ...prevState, enteredCompany: event.target.value};
        // });
    };
    const countChangeHandler = (event) => {
        //Using multiple states
        setEnteredCount(event.target.value);

        //Using single state
        // setUserInput({
        //     ...userInput,
        //     enteredCount: event.target.value,
        // });
    };
    const dateChangeHandler = (event) => {
        //Using multiple states
        setEnteredDate(event.target.value);

        //Using single state
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const layoffData = {
            company: enteredCompany,
            count: enteredCount,
            date: new Date(enteredDate)
        };
        props.onSaveLayoffData(layoffData);
        setEnteredCompany('');
        setEnteredCount('');
        setEnteredDate('');
    };

    return <form onSubmit={submitHandler}>
        <div className="new-layoff__controls">
            <div className="new-layoff__control">
                <label>Task Name</label>
                <input type='text' value={enteredCompany} onChange={companyChangeHandler}/>
            </div>
            <div className="new-layoff__control">
                <label>Hours Needed</label>
                <input type='number' min='0' step='1' value={enteredCount} onChange={countChangeHandler} />
            </div>
            <div className="new-layoff__control">
                <label>Date</label>
                <input type='date' value={enteredDate} onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-layoff__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Task</button>
        </div>
    </form>
};

export default LayoffForm;