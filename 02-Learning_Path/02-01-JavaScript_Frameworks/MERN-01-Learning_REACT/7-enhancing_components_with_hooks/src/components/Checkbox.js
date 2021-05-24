import React, { useReducer, useEffect, useLayoutEffect } from "react";

export default function Checkbox() {
    const [checked, toggle] = useReducer(checked => !checked, false);

    // One time effect cause dependency array is empty
    useEffect(() => {
        alert("Welcome to your first check !")
    }, []);

    // Execute every time state "checked"is modified
    useEffect(() => {
        console.log(checked ? "Yes you check" : "No check"); 
        localStorage.setItem("checkbox-value", checked);
        alert(`checked : ${checked}`);
    });

    // Just an example to show that useLyoutEffect is used when you need to execute effect befored DOM painting
    useLayoutEffect(() => {
        console.log("useLayoutEffect");
    });

    return (
        <>
            <input
                type="checkbox"
                value={checked}
                onChange={toggle}
            />
            {checked ? "checked" : "not checked"}
        </>
    );
};