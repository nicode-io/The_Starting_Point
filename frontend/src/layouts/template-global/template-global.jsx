import React from "react";
import { useLocation } from "react-router";
import Header from "../../components/main_blocks/Header/Header";
import MainBlock from "../../components/main-block/MainBlock";
import Nav from "../../components/main_blocks/Nav/Nav";

export default function TemplateGlobal(props) {
    let location = useLocation().pathname;
    let target;
    if (location === "/test") {
        target = <MainBlock />;
    } else if (location === "/test_deux") {
        target =
            <>
                <Header />
                <Nav />
            </>
    } else {
        target = <Nav/>;
    }
    return (
        <>
            <Header />
            { target }
            <Nav />
        </>
    )
}
