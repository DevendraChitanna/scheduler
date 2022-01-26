export default function getAppointmentsForDay(state, day) {
  const filteredDay = state.days.find(item => item.name === day)
  if (!filteredDay) {
    return [];
  }
  const filteredAppointments = filteredDay.appointments.map(arrNum => state.appointments[arrNum])
  return filteredAppointments;


}