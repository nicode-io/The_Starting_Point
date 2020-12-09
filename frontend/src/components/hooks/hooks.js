
export const useDateToString = (date) => {
    let string = date.getHours() + "h" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes());
    return string;
}