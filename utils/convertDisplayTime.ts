const SECONDS_IN_MINUTE = 60;
const SECONDS_IN_HOUR = SECONDS_IN_MINUTE * 60;

// We want to convert the currentTime such that it only displays
// the hour, minute, and second. We also want this to be in
// standardTime, not military time
export default function convertDisplayTime(datetime: number) {
  const calcHours = Math.floor(datetime / SECONDS_IN_HOUR);
  const calcMinutes = Math.floor(datetime / SECONDS_IN_MINUTE);
  const calcSeconds = datetime % SECONDS_IN_MINUTE;

  const hour = getHour(calcHours);
  const minute = getMinute(calcMinutes);
  const second = getSecond(calcSeconds);

  return `${hour}:${minute}:${second}`
}

function getHour(hour: number) {
  if (hour > 12) return hour - 12
  else return hour
}

function getMinute(minute: number) {
  if (minute >= 10) return minute
  else return `0${minute}`;
}

function getSecond(second: number) {
  if (second >= 10) return second 
  else return `0${second}`;
}
