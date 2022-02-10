import { useState, useEffect } from "react";
import axios from "axios";

// spots is inside dayS obj
// number of spots has a relation with appointments that are not booked (i.e. interview: null)
// update spots in bookInterview and cancelInterview func. & in the .then request
// update the state with new num of spots after update confirmed in server side
//----
//return updated days array

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

  const updateDays = (appointments) => {
    return state.days.map((day) => {
      const newDay = { ...day };
      if (newDay.name === state.day) {
        newDay.spots = newDay.appointments.reduce((spots, id) => {
          if (appointments[id].interview === null) {
            spots += 1;
          }
          return spots;
        }, 0);
      }
      return newDay;
    });
  };

  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.put(`/api/appointments/${id}`, { interview }).then(() => {
      setState({ ...state, appointments, days: updateDays(appointments) });

    });
  };

  const cancelInterview = (id) => {
    return axios.delete(`/api/appointments/${id}`).then(() => {
      const appointment = {
        ...state.appointments[id],
        interview: null,
      };

      const appointments = {
        ...state.appointments,
        [id]: appointment,
      };
      setState({ ...state, appointments, days: updateDays(appointments) });
    });
  };

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  return { state, setDay, bookInterview, cancelInterview };
}