import { useState, useEffect } from 'react';
import { Month } from '../modules/Month';
import { DayView } from './DayView';

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
  </div>;
}