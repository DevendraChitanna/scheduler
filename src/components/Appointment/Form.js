// import React, { useState } from "react";
import React from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {
  const { student, interviewers, interviewer, onSave, onCancel } = props;

  // const [studentt, setStudent] = useState(); // student is a string
  // const [interviewerr, setInterviewer] = useState(); // interview is a number

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}

          />
        </form>
        <InterviewerList

          value={interviewer}
          interviewers={interviewers}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={onCancel}>Cancel</Button>
          <Button confirm onClick={onSave}>Save</Button>
        </section>
      </section>
    </main>
  );
}