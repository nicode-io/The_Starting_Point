import React from "react";
import { ColorContext } from "../";
import Color from "../components/Color";

export default function ColorList() {
    const { colors } = useContext(ColorContext);
    if (!colors.length) return <article>No Colors Listes. Please add one</article>;
    return (
        <article className="color-list">
            {
                colors.map(color => <Color key={color.id} {...color} />)
            }
        </article>
    );
}