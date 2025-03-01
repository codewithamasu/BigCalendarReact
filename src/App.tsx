import Calendar from './components/BigCalendar'
import {DateTime} from 'luxon'


const events = [
  {
    title: 'Meeting',
    start: DateTime.fromISO('2025-02-28T10:00:00').toJSDate(),
    end: DateTime.fromISO('2025-02-28T13:00:00').toJSDate(),
  },
  {
    title: 'Meeting',
    start: DateTime.fromISO('2025-02-28T10:00:00').toJSDate(),
    end: DateTime.fromISO('2025-02-28T13:00:00').toJSDate(),
  },
  {
    title: 'Meeting',
    start: DateTime.fromISO('2025-03-01T10:00:00').toJSDate(),
    end: DateTime.fromISO('2025-03-01T13:00:00').toJSDate(),
  },
]

function App() {
  return <Calendar events={events} startAccessor="start" endAccessor="end" />
}

export default App;
