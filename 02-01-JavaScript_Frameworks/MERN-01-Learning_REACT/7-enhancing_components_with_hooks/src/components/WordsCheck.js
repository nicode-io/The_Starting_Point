import React, { useEffect, useMemo } from "react";
import useAnyKeyToRender from "../hooks/userPressKey";

function WordCount({ children = "" }) {
    useAnyKeyToRender();

    const words = useMemo(() => children.split(" "), [children]);      

    useEffect(() => {
        console.log("fresh render");
    }, [words]);

    return (
        <>
            <p>{children}</p>
            <p>
            <strong>{words.length} - words</strong>
            </p>
        </>
    );
}

export default function WordsCheck() {
  return <WordCount>You are not going to believe this but every word count...</WordCount>;
}