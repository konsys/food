const getDateWithoutTimeZone = () => {
    const date = new Date(new Date().getTime());
    const userTimezoneOffset = date.getTimezoneOffset() * 60000;
    return new Date(date.getTime() - userTimezoneOffset);
}