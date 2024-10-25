import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);
  const handleOnChangeView = (selected: View) => {
    setView(selected);
  };
  const minTime = new Date();
  minTime.setHours(7, 0, 0); // Kalender mulai dari pukul 8:00

  const maxTime = new Date();
  maxTime.setHours(17, 0, 0); // Kalender berakhir di pukul 17:00
  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={[Views.WORK_WEEK, Views.DAY]}
      view={view}
      style={{ height: 500 }}
      onView={handleOnChangeView}
      min={minTime}
      max={maxTime}
    />
  );
};

export default BigCalendar;
