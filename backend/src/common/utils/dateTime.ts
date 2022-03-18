export const getDateWithoutTimeZone = () => {
    const date = new Date();
    const userTimezoneOffset = date.getTimezoneOffset() * 60000;
    return new Date(date.getTime() + userTimezoneOffset);
}