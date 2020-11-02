function formatDate(date, dateType) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;

  if (dateType === "time&date") {
    return (
      strTime +
      " " +
      (date.getMonth() + 1) +
      "/" +
      date.getDate() +
      "/" +
      date.getFullYear()
    );
  } else {
    return strTime;
  }
}
export default formatDate;
