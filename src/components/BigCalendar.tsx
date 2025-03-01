import { Calendar as BigCalendar, luxonLocalizer, CalendarProps } from 'react-big-calendar'
import { DateTime } from 'luxon'

// Setup the localizer using Luxon
const localizer = luxonLocalizer(DateTime) 


const Calendar = (props: Omit<CalendarProps, 'localizer'>) => (
  <div style={{ height: '100vh' }}>
    <BigCalendar
      localizer={localizer}
      {...props}
      min={new Date(2023, 0, 1)}  // Range lebih luas
      max={new Date(2026, 11, 31)}
/>
  </div>
)

export default Calendar;
