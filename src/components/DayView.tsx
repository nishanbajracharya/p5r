import { useState, useEffect } from 'react';

import { Day, Event, Month } from '../modules/Month';

export function EventView(props: { data?: Event[] }) {
  const { data } = props;

  return <div>
    {data?.map((event, index) =>
      <div className="event-list" key={`${event.toString()}-${index}`}>
        {
          event?.isClass && <div className="event">
            {
              event?.classAnswers && <div className="event-content">
                <p>Class Answers: <strong>{event.classAnswers.join(', ')}</strong></p>
              </div>
            }
          </div>
        }
        {
          event?.isCrosswordSolve && <div className="event">
            {
              event?.crosswordAnswers && <div className="event-content">
                <p>Crossword Answers: <strong>{event.crosswordAnswers.join(', ')}</strong></p>
              </div>
            }
          </div>
        }
        {
          event?.isPalaceInfiltration && <div className="event"><div className="event-content"><p>Palace Infiltration</p></div></div>
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
                <p>Borrow {event.bookNames?.join(', ')}</p>
              </div>
            }
          </div>
        }
        {
          event?.isBuyItem && <div className="event">
            <div className="event-content">
              <p>Buy <strong>{event?.buyItems?.map(item => {
                if (!item.location) return item.name;

                return `${item.name} at ${item.location}`;
              }).join(', ')}</strong></p>
            </div>
          </div>
        }
        {
          (event?.isVisitPerson || event?.isConfidantHangout) && <div className="event">
            <div className="event-content">
              <p>{event?.isConfidantHangout ? 'Hangout with' : 'Visit'} <strong>{event?.visitedPeople?.map(person => {
                if (!person.location) return person.name;

                return `${person.name} at ${person.location}`;
              }).join(', ')}</strong></p>
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
        {
          event?.confidantAnswers && event.confidantAnswers.length > 0 && <div className="event">
            <p className="event-headers">Confidant Answers</p>
            <div className="event-content">
              {
                event.confidantAnswers.map(answer => {
                  if (answer.specific) return <p key={answer.answer}><strong>{answer.answer}</strong></p>;
                  return <p key={answer.answer}>{answer.answer}</p>;
                })
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
    <p className="day-header" id={`${props.month.month}-${day.date}`}>{props.month.month}/{day.date} {day.name}</p>
    {day.daytime && <p className="day-daytime">Daytime</p>}
    <EventView data={day.daytime} />
    {day.evening && <p className="day-evening">Evening</p>}
    <EventView data={day.evening} />

    {!(day.daytime || day.evening) && <p>Automatic</p>}
  </div>;
}