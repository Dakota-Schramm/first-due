// We want to convert the currentTime such that it only displays
// the hour, minute, and second. We also want this to be in
// standardTime, not military time
export default function convertDisplayTime(datetime: Date) {
  const hour = getHour(datetime.getHours());
  const minute = getMinute(datetime.getMinutes());
  const second = getSecond(datetime.getSeconds());

  return `${hour}:${minute}:${second}`
}

function getHour(hour: number) {
  if (hour > 12) return hour - 12
  else return hour
}

function getMinute(minute: number) {
  if (minute > 10) return minute
  else return `0${minute}`;
}

function getSecond(second: number) {
  if (second > 10) return second 
  else return `0${second}`;
}
