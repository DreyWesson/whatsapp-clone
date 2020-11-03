function formatDate(date, dateType) {
  var hours = date.getHours(),
    minutes = date.getMinutes(),
    ampm = hours >= 12 ? "pm" : "am",
    strTime;
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  strTime = hours + ":" + minutes + " " + ampm;

  return dateType === "time&date"
    ? `${strTime} ${
        date.getMonth() + 1
      }/${date.getDate()}/${date.getFullYear()}`
    : strTime;
}
export default formatDate;
