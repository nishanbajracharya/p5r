import { useState, useEffect } from 'react';

import { Day, Event, Month } from '../modules/Month';

export function EventView(props: { data: Event }) {
  const { data } = props;

  return <div className="event-list">
    {
      data?.isClass && <div className="event">
        <p className="event-header">Class</p>
        {
          data?.classAnswers && <div className="event-content">
            <p>Answers: <strong>{data.classAnswers.join(', ')}</strong></p>
          </div>
        }
      </div>
    }
    {
      data?.isPalaceInfiltration && <div className="event">Palace Infiltration</div>
    }
    {
      data?.isTrophyEarned && <div className="event">
        {
          data?.trophies && <div className="event-content">
            <p>Trophies Earned: <strong>{data.trophies.join(', ')}</strong></p>
          </div>
        }
      </div>
    }
    {
      data?.isConfidantUp && <div className="event">
        {
          data?.confidants && <div className="event-content">
            <p>Confidant Rank Up: <strong>
              {
                data.confidants.map(confidant => `${confidant.name} Rank ${confidant.rank}`).join(', ')
              }
            </strong>
            </p>
          </div>
        }
      </div>
    }
    {
      data?.notes && <div className="event">
        <div className="event-content">
          {
            data.notes.map(note => <p>{note}</p>)
          }
        </div>
      </div>
    }
  </div>;
}

export function DayView(props: { data: Day, month: Month }) {
  const [day, setDay] = useState<Day>();

  useEffect(() => {
    setDay(props.data);
  }, [props.data]);

  if (!day) return;

  return <div className="day">
    <p className="day-header">{props.month.month}/{day.date} {day.name}</p>
    {day.daytime && <p className="day-daytime">Daytime</p>}
    <EventView data={day.daytime} />
    {day.evening && <p className="day-evening">Evening</p>}
    <EventView data={day.evening} />

    {!(day.daytime && day.evening) && <p>Automatic</p>}
  </div>;
}