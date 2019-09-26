import React from 'react';
import './Activity.scss';
import { formatDuration, formatDistance } from '../../helpers/format';
import { ReactComponent as Bike } from '../../assets/img/bike.svg';
import { ReactComponent as Running } from '../../assets/img/running.svg';
import { TYPE_SPORT } from '../../constants';

const Activity = ({ type, duration, distance }) => (
  <div className="activity">
    <p>{type.toUpperCase() === TYPE_SPORT.CYCLING ? <Bike /> : <Running />}</p>
    <div>
      <span className="label">
        {type.toUpperCase() === TYPE_SPORT.CYCLING ? 'Vélo' : 'Course'}
      </span>
      <span>{formatDistance(distance)}</span>
    </div>
    <span>{formatDuration(duration)}</span>
  </div>
);

export default Activity;
