import React, { Fragment } from 'react';
import "components/Appointment/styles.scss";
import Header from './Header';
import Show from './Show';
import Empty from './Empty';


export default function Appointment(props) {
  const { id, time, interview } = props;
  return (
    <article className="appointment">
      <Fragment>
        {interview ?
          <>
            <Header time={time} />
            <Show
              id={id}
              student={interview.student}
              interviewer={interview.interviewer.name} />
          </>
          :
          <>
            <Header time={time} />
            <Empty />

          </>
        }
      </Fragment>
    </article>
  );
}
