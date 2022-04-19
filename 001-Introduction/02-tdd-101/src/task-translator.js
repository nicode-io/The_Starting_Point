import {dict} from "./constants";

export const translate = (input) => {
    const items = input.split('');

    return items.reduce((accumulator, current) => {
        const {status, timing} = parseEntry(current);
        accumulator[status] = (accumulator[status] || 0) + timing;
        return accumulator;
    }, {})
}

const parseEntry = (task) => dict[task]

