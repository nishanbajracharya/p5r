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
          event?.goToHideout && <div className="event">
            <p className="event-header">Go to Hideout</p>
            <ul className="event-content">
              <li>Location: <strong>{event.hideoutLocation}</strong></li>
            </ul>
          </div>
        }
        {
          event.isSecureInfiltrationRoute && <div className="event">
            <div className="event-content">
              <p>Secure Infiltration route to the treasure in <strong>{event.bossName}</strong>'s palace</p>
            </div>
          </div>
        }
        {
          event.isLeavePalaceWithPersonas && <div className="event">
            <p className="event-header">Leave the palace with following personas:</p>
            <ul className="event-content">
              {
                event.personas?.map(persona => <li><strong>{persona.name} ({persona.confidant})</strong></li>)
              }
            </ul>
          </div>
        }
        {
          event?.isTrophyEarned && <div className="event">
            <p className="event-header">Trophies earned:</p>
            {
              event?.trophies && <ul className="event-content">
                {
                  event.trophies.map(trophy => <li><strong>{`${trophy.name} (${trophy.unlockMode})`}</strong></li>)
                }
              </ul>
            }
          </div>
        }
        {
          event?.isConfidantUp && <div className="event">
            <p className="event-header">Confidant Rank Up:</p>
            {
              event?.confidantRanks && <ul className="event-content">
                {
                  event.confidantRanks.map(confidant => <li><strong>{`${confidant.name} Rank ${confidant.rank}`}</strong></li>)
                }
              </ul>
            }
          </div>
        }
        {
          event?.isExamineBedroomPlant && <div className="event">
            <div className="event-content">
              <p>Examine your bedroom plant</p>
            </div>
          </div>
        }
        {
          event?.isUseItem && <div className="event">
            {
              event?.useItems && <div className="event-content">
                <p>Use <strong>{event.useItems.join(', ')}</strong></p>
              </div>
            }
          </div>
        }
        {
          event?.isCraftItem && <div className="event">
            {
              event?.itemCraft && <div className="event-content">
                <p>Craft <strong>{event.itemCraft.join(', ')}</strong></p>
              </div>
            }
          </div>
        }
        {
          event?.isSkillUp && <div className="event">
            <p className="event-header">Skill Up:</p>
            {
              event?.skills && <ul className="event-content">
                {
                  event.skills.map(skill => <li><strong>{`${skill.name} +${skill.increase}`}</strong></li>)
                }
              </ul>
            }
          </div>
        }
        {
          event?.isVisitLibrary && <div className="event">
            {
              event.isBorrowBook && <div className="event-content">
                <p>Borrow <strong>{event.borrowBooks?.join(', ')}</strong></p>
              </div>
            }
          </div>
        }
        {
          event?.isBuyItem && <div className="event">
            <p className="event-header">Buy Items:</p>
            <ul className="event-content">
              {event?.buyItems?.map(item => {
                if (!item.location) return <li><strong>{item.name}</strong></li>;

                return <li><strong>{`${item.name} at ${item.location}`}</strong></li>;
              })}
            </ul>
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
            <p className="event-header">Confidant Answers:</p>
            <ul className="event-content">
              {
                event.confidantAnswers.map(answer => {
                  if (answer.specific) return <li key={answer.answer}><strong>{answer.answer}</strong></li>;
                  return <li key={answer.answer}>{answer.answer}</li>;
                })
              }
            </ul>
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