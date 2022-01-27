import React, { Fragment } from 'react';
import "components/Appointment/styles.scss";
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import useVisualMode from 'hooks/useVisualMode';
import Button from 'components/Button';
import Form from './Form';


export default function Appointment(props) {
  const { id, time, interview, interviewers } = props;
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";

  const { mode, transition, back } = useVisualMode(
    interview ? SHOW : EMPTY
  )
  return (
    <article className="appointment">
      <Fragment>
        {interview ?
          <>
            <Header time={time} />
            {mode === SHOW && (<Show
              id={id}
              student={interview.student}
              interviewer={interview.interviewer.name} />)}
          </>
          :
          <>
            <Header time={time} />
            {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
            {mode === CREATE && (<Form
              interviewers={interviewers}
              onSave={() => transition(SHOW)}
              onCancel={() => back(EMPTY)}
            />)}
          </>
        }
      </Fragment>
    </article>
  );
}
