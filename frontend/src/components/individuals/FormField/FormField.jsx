import React from "react";

export function FormField(props,{data}) {
    // props.label props.type props.name
    let field;
    let required = (props.required !== undefined) ? props.required : false;

    if (props.type === "textarea") {
        field = <div>
                    <label for={props.label}>{props.label}</label>
                    <textarea name={props.label} onChange={e => props.callback(e.target.value)}/>
                </div>
    } else if (props.type === "submit" || props.type === "button") {
        field = <div>
                    <input name={props.label} type={props.type} value={props.label} onChange={e => props.callback(e.target.value)}/>
                </div>
    } else if (props.type === "radio") {
        field = <div>
                    <label for={props.label}>{props.label}</label>
                    <input id={props.label} type={props.type} value={props.label} name={props.name} onChange={e => props.callback(e.target.value)}/>
                </div>
    } else  {
        field = <div>
                    <label for={props.label}>{props.label}</label>
                    <input name={props.label} type={props.type} required={required} onChange={e => props.callback(e.target.value)}/>
                </div>
    }

 
    return (
        field
    )
}