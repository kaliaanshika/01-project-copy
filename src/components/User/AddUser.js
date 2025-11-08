import React, { useState, useRef } from "react";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModel from "../UI/ErrorModel";
const AddUser = (props) => {
    // const [enterUsername, setEnterUserName] = useState("");
    const userNameInputRef = useRef();
    //  const [enterUserage, setEnterUserAge] = useState("");
    const userAgeInputRef = useRef();
    const [error, setError] = useState();



    const submitHandler = (event) => {
        event.preventDefault();
        let enterUsername = userNameInputRef.current.value;
        userNameInputRef.current.value = ('');
        let enterUserage = userAgeInputRef.current.value;
        userAgeInputRef.current.value = ('');



        if (enterUsername.trim().length === 0) {
            setError({
                title: "Invale Input",
                message: "Please enter valid Input, non-enpty value",
            });
            return;
        }
        if (+enterUserage < 1) {
            setError({
                title: "Invale Age",
                message: "Please enter valid Age (>0)",
            });
            return;
        }

        console.log(enterUsername, enterUserage);
        props.onAddUser(enterUsername, enterUserage);


    };
    const errorHandler = () => {
        setError(null);
    };

    return (
        <React.Fragment>
            {error && (
                <ErrorModel
                    title={error.title}
                    message={error.message}
                    onClose={errorHandler}
                />
            )}
            <Card className={classes.input}>
                <form onSubmit={submitHandler}>
                    <label htmlFor="username">User Name</label>
                    <input
                        type="text"
                        id="username"
                        ref={userNameInputRef}

                    />
                    <label htmlFor="age">Age(year)</label>
                    <input
                        type="number"
                        id="age"
                        ref={userAgeInputRef}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </React.Fragment>
    );
};

export default AddUser;
