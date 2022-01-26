export function getAppointmentsForDay(state, day) {
  const filteredDay = state.days.find(item => item.name === day);
  if (!filteredDay) {
    return [];
  }
  const filteredAppointments = filteredDay.appointments.map(arrNum => state.appointments[arrNum]);
  return filteredAppointments;
}

export function getInterview(state, interview) {

  if (!interview) {
    return null;
  }

  const interviewerID = interview.interviewer;
  const result = { student: interview.student, interviewer: state.interviewers[interviewerID] };

  return result;
}