import { useState, useEffect } from 'react';

import { Day, Event, Month } from '../modules/Month';

export function EventView(props: { data?: Event[] }) {
  const { data } = props;

  return <div>
    {data?.map((event, index) =>
      <div className="event-list" key={`${event.toString()}-${index}`}>
        {
          event?.isClass && <div className="event">
            <p className="event-header">Class</p>
            {
              event?.classAnswers && <div className="event-content">
                <p>Answers: <strong>{event.classAnswers.join(', ')}</strong></p>
              </div>
            }
          </div>
        }
        {
          event?.isPalaceInfiltration && <div className="event">Palace Infiltration</div>
        }
        {
          event?.isTrophyEarned && <div className="event">
            {
              event?.trophies && <div className="event-content">
                <p>Trophies Earned: <strong>{event.trophies.join(', ')}</strong></p>
              </div>
            }
          </div>
        }
        {
          event?.isConfidantUp && <div className="event">
            {
              event?.confidants && <div className="event-content">
                <p>Confidant Rank Up: <strong>
                  {
                    event.confidants.map(confidant => `${confidant.name} Rank ${confidant.rank}`).join(', ')
                  }
                </strong>
                </p>
              </div>
            }
          </div>
        }
        {
          event?.isCraftItem && <div className="event">
            {
              event?.itemCraft && <div className="event-content">
                {event.itemCraft.join(', ')}
              </div>
            }
          </div>
        }
        {
          event?.isSkillUp && <div className="event">
            {
              event?.skills && <div className="event-content">
                <p>Skill Up: <strong>
                  {
                    event.skills.map(skill => `${skill.name} +${skill.increase}`).join(', ')
                  }
                </strong>
                </p>
              </div>
            }
          </div>
        }
        {
          event?.isVisitLibrary && <div className="event">
            {
              event.isBorrowBook && <div className="event-content">
                Borrow {event.bookNames?.join(', ')}
              </div>
            }
          </div>
        }
        {
          event?.isBuyItem && <div className="event">
            <div className="event-content">
              <p>Buy <strong>{event?.buyItems?.map(item => `${item.name} at ${item.location}`).join(', ')}</strong></p>
            </div>
          </div>
        }
        {
          event?.isVisitPerson && <div className="event">
            <div className="event-content">
              <p>Visit <strong>{event?.visitedPeople?.map(person => `${person.name} at ${person.location}`).join(', ')}</strong></p>
            </div>
          </div>
        }
        {
          event?.notes && <div className="event">
            <div className="event-content">
              {
                event.notes.map(note => <p key={note}>{note}</p>)
              }
            </div>
          </div>
        }
      </div>
    )}
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

    {!(day.daytime || day.evening) && <p>Automatic</p>}
  </div>;
}