import { MONTHS } from '../constants';

export const formatDuration = sec => {
  let duration = '';

  sec = parseInt(sec, 10);
  let hours = Math.floor(sec / 3600);
  let minutes = Math.floor((sec - hours * 3600) / 60);

  if (hours > 0) {
    if (hours < 10) hours = '0' + hours;
    duration = hours + 'h';
  }

  if (minutes > 0) {
    if (minutes < 10) minutes = '0' + minutes;
    if (!hours) minutes = minutes + 'm';
    duration = duration + minutes;
  }

  return duration;
};

export const formatDistance = meters => {
  let distance = '';
  distance = meters / 1000;
  distance = distance.toFixed(2) + ' km';

  return distance;
};

export const formatDate = date => {
  date = new Date(date);
  let formatDate = '';

  if (date.getDate() < 10) formatDate = '0' + date.getDate();
  else formatDate = date.getDate();

  return (
    formatDate +
    ' ' +
    MONTHS[date.getMonth()] +
    ' ' +
    date.getFullYear()
  );
};
