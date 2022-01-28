export function getAppointmentsForDay(state, day) {
  const filteredDay = state.days.find((item) => item.name === day);
  if (!filteredDay) {
    return [];
  }
  const appointments = filteredDay.appointments.map(
    (arrNum) => state.appointments[arrNum]
  );
  return appointments;
}

export function getInterview(state, interview) {

  if (!interview) {
    return null;
  }

  const id = interview.interviewer;
  const interviewer = state.interviewers[id]
  const result = { ...interview, interviewer }

  return result;
}

export function getInterviewersForDay(state, day) {
  const filteredDay = state.days.find((item) => item.name === day);
  if (!filteredDay) {
    return [];
  }

  const findInterviewerID = filteredDay.interviewers.map(
    (id) => state.interviewers[id]
  );
  return findInterviewerID;
}