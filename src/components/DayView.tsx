import { useState, useEffect } from 'react';

import { Day, Event, Month } from '../modules/Month';

export function EventView(props: { data?: Event[] }) {
  const { data } = props;

  return <div>
    {data?.map((event, index) =>
      <div className="event-list" key={`${event.toString()}-${index}`}>
        {
          event?.isClass && <div className="event">
            <p className="event-header">Class Answers</p>
            {
              event?.classAnswers && <ul className="event-content">
                {event.classAnswers.map((answer, index) => <li key={`${answer}-${index}`}><strong>{answer}</strong></li>)}
              </ul>
            }
          </div>
        }
        {
          event?.isExamDay && <div className="event">
            <p className="event-header">Exam Answers</p>
            {
              event?.examAnswers && <ul className="event-content">
                {event.examAnswers.map((answer, index) => <li key={`${answer}-${index}`}><strong>{answer}</strong></li>)}
              </ul>
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
          event?.isStudyInLeblanc && <div className="event"><div className="event-content"><p>Study in <strong>Leblanc</strong></p></div></div>
        }
        {
          event?.isStudyInLibrary && <div className="event"><div className="event-content"><p>Study in <strong>Library</strong></p></div></div>
        }
        {
          event?.isMakeCoffee && <div className="event"><div className="event-content"><p>Make Coffee in <strong>Coffee Siphon in Leblanc</strong></p></div></div>
        }
        {
          event?.isVisitBathhouse && <div className="event"><div className="event-content"><p>Visit Bathhouse in <strong>Yongen-Jaya</strong></p></div></div>
        }
        {
          event?.isVisitBattingCenter && <div className="event"><div className="event-content"><p>Visit Batting Center in <strong>Yongen-Jaya</strong></p></div></div>
        }
        {
          event?.isVisitDVDRental && <div className="event">
            <p className="event-header">Visit DVD Rental in <strong>Shibuya Central Steet</strong></p>
            <ul className="event-content">
              {event.isSignUpDVDMembership && <li>Sign up for <strong>annual membership (¥4,800)</strong></li>}
              {event.isReturnDVD && <li>Return <strong>{event.returnDVDs?.join(', ')}</strong></li>}
              {event.isBorrowDVD && <li>Borrow <strong>{event.borrowDVDs?.join(', ')}</strong></li>}
            </ul>
          </div>
        }
        {
          event.isWatchInTheater && <div className="event">
            <p className="event-header">Watch Movie in Theater</p>
            <ul className="event-content">
              {event.movieNames?.map((name, index) => <li key={`${name}-${index}`}><strong>{name}</strong></li>)}
            </ul>
          </div>
        }
        {
          event?.isReadBook && <div className="event">
            <div className="event-content">
              {
                event.readBooks?.map((book, index) => <p key={`${book.name}-${index}`}>Read <strong>{book.name} in {book.location}</strong></p>)
              }
            </div>
          </div>
        }
        {
          event.isBigBangChallenge && <div className="event">
            <div className="event-content">
              <p>Visit <strong>Big Bang Burger in Shibuya</strong> and complete the <strong>Big Bang Challenge</strong></p>
            </div>
          </div>
        }
        {
          event.isApplyJob && <div className="event">
            <p className="event-header">Apply for a job</p>
            <ul className="event-content">
              {
                event.jobs?.map((job, index) => <li key={`${job.name}-${index}`}><strong>{job.name} ({job.location})</strong></li>)
              }
            </ul>
          </div>
        }
        {
          event.isWorkJob && <div className="event">
            <p className="event-header">Work at job</p>
            <ul className="event-content">
              {
                event.jobs?.map((job, index) => <li key={`${job.name}-${index}`}><strong>{job.name} ({job.location})</strong></li>)
              }
              {
                event.jobAnswers && event.jobAnswers.length > 0 && <li>Answers: <strong>{event.jobAnswers.join(', ')}</strong></li>
              }
            </ul>
          </div>
        }
        {
          event?.isPalaceInfiltration && <div className="event">
            <p className="event-header">Palace Infiltration</p>
            <ul className="event-content">
              {event.bossName ? <li><strong>{event.bossName}'s Palace</strong></li> : null}
              {event.isFindWillSeeds && <li>Find all <strong>Will Seeds</strong></li>}
              {event.isFinishPalace && <li>Finish the Palace</li>}
            </ul>
          </div>
        }
        {
          event?.goToHideout && <div className="event">
            <p className="event-header">Go to Hideout</p>
            <ul className="event-content">
              <li>Location: <strong>{event.hideoutLocation}</strong></li>
              {event.isSendCallingCard && <li><strong>Send Calling Card</strong></li>}
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
                event.personas?.map((persona, index) => <li key={`${persona.name}-${index}`}><strong>{persona.name} ({persona.confidant})</strong></li>)
              }
            </ul>
          </div>
        }
        {
          event.isStudyInDiner && <div className="event">
            <p className="event-header">Study at Diner in Central Steet:</p>
            <ul className="event-content">
              {
                event.dinerOrders?.map((order, index) => <li key={`${order}-${index}`}>Order <strong>{order}</strong></li>)
              }
            </ul>
          </div>
        }
        {
          event.isExamineTV && <div className="event">
            <p className="event-header">Examine the TV in Leblanc:</p>
            <ul className="event-content">
              {
                event.tvAnswers?.map((answer, index) => <li key={`${answer}-${index}`}><strong>{answer}</strong></li>)
              }
            </ul>
          </div>
        }
        {
          event.isWatchDVD && <div className="event">
            <p className="event-header">Watch DVDs in your room:</p>
            <ul className="event-content">
              {
                event.watchDVDs?.map((dvd, index) => <li key={`${dvd}-${index}`}><strong>{dvd}</strong></li>)
              }
            </ul>
          </div>
        }
        {
          event?.isVisitMementos && <div className="event">
            <p className="event-header">Go to Mementos {event.mementosActions ? 'and clear requests:' : ''}</p>
            {
              event?.mementosActions && <ul className="event-content">
                {
                  event.mementosActions.map((action, index) => <li key={`${action}-${index}`}><strong>{action}</strong></li>)
                }
              </ul>
            }
          </div>
        }
        {
          event?.isTrophyEarned && <div className="event">
            <p className="event-header">Trophies earned:</p>
            {
              event?.trophies && <ul className="event-content">
                {
                  event.trophies.map((trophy, index) => <li key={`${trophy.name}-${index}`}><strong>{`${trophy.name} (${trophy.unlockMode})`}</strong></li>)
                }
              </ul>
            }
          </div>
        }
        {
          event?.isHomeShopping && <div className="event">
            <p className="event-header">Home Shopping:</p>
            {
              event?.homeShoppingPurchases && <ul className="event-content">
                {
                  event.homeShoppingPurchases.map((item, index) => <li key={`${item}-${index}`}><strong>{item}</strong></li>)
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
          event?.isVisitLibrary && <div className="event">
            <p className="event-header">Visit Library</p>
            {
              (event.isReturnBook || event.isBorrowBook) && <ul className="event-content">
                {event.isReturnBook && <li>Return <strong>{event.returnBooks?.join(', ')}</strong></li>}
                {event.isBorrowBook && <li>Borrow <strong>{event.borrowBooks?.join(', ')}</strong></li>}
              </ul>
            }
          </div>
        }
        {
          event?.isBuyItem && <div className="event">
            <p className="event-header">Buy Items:</p>
            <ul className="event-content">
              {event?.buyItems?.map((item, index) => {
                if (!item.location) return <li key={`${item.name}-${index}`}><strong>{item.name}</strong></li>;

                return <li key={`${item.name}-${index}`}><strong>{`${item.name} at ${item.location}`}</strong></li>;
              })}
            </ul>
          </div>
        }
        {
          (event?.isVisitPerson || event?.isConfidantHangout) && <div className="event">
            <div className="event-content">
              <p>{event?.isConfidantHangout ? 'Hangout with' : 'Visit'} <strong>{event?.visitedPeople?.map(person => {
                const personaEquipped = person.personaEquipped ? ` (${person.personaEquipped} equipped)` : '';
                if (!person.location) return `${person.name}${personaEquipped}`;

                return `${person.name} at ${person.location}${personaEquipped}`;
              }).join(', ')}</strong></p>
            </div>
          </div>
        }
        {
          event?.notes && <div className="event">
            <div className="event-content">
              {
                event.notes.map((note, index) => <p key={`${note}-${index}`}><strong>{note}</strong></p>)
              }
            </div>
          </div>
        }
        {
          event.isVisitDartsAndBilliards && <div className="event">
            <p className="event-header">Visit Darts and Billiards {event.dartsAndBilliardsParticipants ? <strong>with {event.dartsAndBilliardsParticipants.join(', ')}</strong> : null}</p>
            <ul className="event-content">
              {
                event.dartsAndBilliardsActions?.map((action, index) => <li key={`${action}-${index}`}><strong>{action}</strong></li>)
              }
            </ul>
          </div>
        }
        {
          event.isCallPerson && <div className="event">
            <div className="event-content">
              <p>Call <strong>{event.callPerson?.person}</strong> at <strong>{event.callPerson?.location}</strong> {event.callPerson?.requirement && `(Requirement: ${event.callPerson.requirement})`}{event.callPerson?.isPersonaEquipped && `(Equipped Persona: ${event.callPerson.equippedPersonas?.join(', ')})`}</p>
            </div>
          </div>
        }
        {
          event?.isHangoutEvent && <div className="event">
            <div className="event-content">
              <p>Hang out with <strong>{event.hangoutParticipants?.join(', ')}</strong> at <strong>{event.hangoutLocation}</strong></p>
            </div>
          </div>
        }
        {
          event?.confidantAnswers && event.confidantAnswers.length > 0 && <div className="event">
            <p className="event-header">Confidant Answers:</p>
            <ul className="event-content">
              {
                event.confidantAnswers.map((answer, index) => {
                  const prefix = answer.isPhone ? '(Later in Phone) ' : '';
                  if (answer.specific) return <li key={`${answer.answer}-${index}`}><strong>{prefix}{answer.answer}</strong></li>;
                  return <li key={`${answer.answer}-${index}`}>{prefix}{answer.answer}</li>;
                })
              }
            </ul>
          </div>
        }
        {
          event?.isConfidantUp && <div className="event">
            <p className="event-header">Confidant Rank Up:</p>
            {
              event?.confidantRanks && <ul className="event-content">
                {
                  event.confidantRanks.map((confidant, index) => <li key={`${confidant.name}-${index}`}><strong>{`${confidant.name} Rank ${confidant.rank}`}</strong></li>)
                }
              </ul>
            }
          </div>
        }
        {
          event?.isSkillUp && <div className="event">
            <p className="event-header">Skill Up:</p>
            {
              event?.skills && <ul className="event-content">
                {
                  event.skills.map((skill, index) => <li key={`${skill.name}-${index}`}><strong>{`${skill.name} +${skill.increase}`} {skill.rankUp ? `(${skill.name} Rank ${skill.rank})` : ''}</strong></li>)
                }
              </ul>
            }
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