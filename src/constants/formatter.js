const convertTo24Format = (timeIn12, timeFormat) => {
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

export {convertTo24Format};