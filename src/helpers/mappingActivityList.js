const mappingActivityList = activityList =>
  activityList.map(({ 
    id,
    type,
    date,
    duration,
    distance
  }) => ({
    id,
    type,
    date,
    duration,
    distance
  }));

export default mappingActivityList;