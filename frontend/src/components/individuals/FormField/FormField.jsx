import React from "react";

export function FormField(props) {
    // props.label props.type
    let field;
    
    if (props.type === "textarea") {
        field = <div>
                    <label for={props.label}>{props.label}</label>
                    <textarea name={props.label} />
                </div>
    } else if (props.type === "submit" || props.type === "button") {
        field = <div>
                    <input name={props.label} type={props.type} value={props.label} />
                </div>
    } else  {
        field = <div>
                    <label for={props.label}>{props.label}</label>
                    <input name={props.label} type={props.type} />
                </div>
    }

    return (
        field
    )
}