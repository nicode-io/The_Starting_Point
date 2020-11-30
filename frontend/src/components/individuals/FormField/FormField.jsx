import React from "react";
import "./formField.css";

export function FormField(props) {
    // props.label props.type props.name
    let field;
    let required = (props.required !== undefined) ? props.required : false;
    
    if (props.type === "textarea") {
        field = <div>
                    <textarea name={props.label} placeholder={props.placeholder} id={props.id} />
                </div>
    } else if (props.type === "submit" || props.type === "button") {
        field = <div>
                    <input name={props.label} type={props.type} value={props.label} class={props.class} id={props.id} />
                </div>
    } else if (props.type === "radio") {
        field = <div id="ff-radio">
                    <p><input class="ff-radio-radio" id={props.label} type={props.type} value={props.label} name={props.name} id={props.id} /></p>
                    <label for={props.label}>{props.label}</label>
                </div>
    } else  {
        field = <div>
                    <label for={props.label}>{props.label}</label>
                    <input name={props.label} type={props.type} required={required} placeholder={props.placeholder}id={props.id} />
                </div>
    }

    return (
        field
    )
}