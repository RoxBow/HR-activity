import React from 'react';
import './ActivityList.scss';
import isSameDate from '../../helpers/isSameDate';
import { formatDate } from '../../helpers/format';
import Activity from '../Activity/Activity';

const ActivityList = ({ list }) => (
  <ul className="activity-list">
    {list.map((activity, i) => (
      <li className="wrapper-activity" key={i}>
        {list[i + 1] && !isSameDate(activity.date, list[i + 1].date) && (
          <p className="date">{formatDate(activity.date)}</p>
        )}
        <Activity {...activity} />
      </li>
    ))}
  </ul>
);

export default ActivityList;
