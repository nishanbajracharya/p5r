import { useState, useEffect } from 'react';

import { DayView } from './DayView';
import { Month } from '../modules/Month';

export function MonthView(props: { data: Month }) {
  const [month, setMonth] = useState<Month>();

  useEffect(() => {
    setMonth(props.data);
  }, [props.data]);

  if (!month) return;

  return <div className="month">
    <p className="month-name">{month.name}</p>

    <div className="day-list">
      {
        month.days.map((day, index) => <DayView key={`${month.name}-${index}`} data={day} month={month} />)
      }
    </div>
    <div className="month-stats">
      <h4>{month.name} Stats</h4>
      <p><strong>Confidants:</strong></p>
      <ul>
        {month.stats.confidants.map((confidant, index) => (
          <li key={`${confidant.name}-${index}`}><strong>{`${confidant.name}: `}</strong>{`Rank ${confidant.rank}`}</li>
        ))}
      </ul>
      <p><strong>Skills:</strong></p>
      <ul>
        {month.stats.skills.map((skill, index) => (
          <li key={`${skill.name}-${index}`}><strong>{`${skill.name}: `}</strong>{`Rank ${skill.rank}`}</li>
        ))}
      </ul>
    </div>
  </div>;
}