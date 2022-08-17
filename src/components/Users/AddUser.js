import React, { useState } from 'react';
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";


const AddUser = props => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredUserAge, setEnteredUserAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredUserAge.trim().length === 0) {
            return;
        }
        if(+enteredUserAge < 1) {
            return;
        }
        console.log(enteredUsername, enteredUserAge);
        setEnteredUsername('');
        setEnteredUserAge('');
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    };

    const ageChangeHandler = (event) => {
        setEnteredUserAge(event.target.value)
    }

       return (
           <Card cssName={classes.input}>
               <form onSubmit={addUserHandler}>
                   <label htmlFor="username">Username</label>
                   <input
                       id="username"
                       value={enteredUsername}
                       type="text"
                       onChange={usernameChangeHandler}
                   />
                   <label htmlFor="age">Age (Years)</label>
                   <input
                       id="age"
                       type="number"
                       value={enteredUserAge}
                       onChange={ageChangeHandler}
                   />
                   <Button type="submit">Add User</Button>
               </form>
           </Card>
       );
};


export default AddUser;
