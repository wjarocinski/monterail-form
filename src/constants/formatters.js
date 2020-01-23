export const convertTo24Format = (timeIn12, timeFormat) => {
    const hours = timeIn12.split(":")[0];
    const minutes = timeIn12.split(":")[1];

    if(timeFormat === "am" && +hours === 12){
        return `00:${minutes}`;
    } else if(timeFormat === "am" && +hours < 12){
        return `${hours}:${minutes}`
    } else {
        const hoursIn12Format = +hours + 12;
        return `${hoursIn12Format}:${minutes}`;
    }
}

export const convertTo12Format = (timeIn24) => {
    const hours = timeIn24.split(":")[0];
    const minutes = timeIn24.split(":")[1];
    if(+hours <= 12){
        return `${hours}:${minutes}`
    } else {
        const hoursIn24Format = +hours - 12;
        return `${hoursIn24Format}:${minutes}`
    }
}

export const currentDateFormattedToIso = date => {
    return date.toISOString().slice(0, 10);
}

export const currentTimeFormattedToLocale = date => {
    return date.toLocaleString().slice(12, 17);
}
