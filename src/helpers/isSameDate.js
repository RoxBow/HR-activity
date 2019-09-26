const isSameDate = (dateA, dateB) => {
  dateA = new Date(dateA);
  dateB = new Date(dateB);

  if (
    dateA.getDate() === dateB.getDate() &&
    dateA.getMonth() === dateB.getMonth() &&
    dateA.getFullYear() === dateB.getFullYear()
  ) {
    return true;
  }

  return false;
};

export default isSameDate;
