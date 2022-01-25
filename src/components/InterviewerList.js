import React from 'react';
import "components/InterviewerList.scss";
import InterviewerListItem from './InterviewerListItem';

export default function InterviewerList(props) {
  const { interviewers, onChange, value } = props;

  const interviewerList = interviewers.map((item) => {
    return <InterviewerListItem
      key={item.id}
      id={item.id}
      name={item.name}
      avatar={item.avatar}
      selected={item.id === value}
      setInterviewer={() => onChange(item.id)}
    />
  })

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewerList}
      </ul>
    </section >
  );
}