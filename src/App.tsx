
import './App.css'
import { Container } from 'semantic-ui-react'
import EventDashboard from './app/features/events/EventDashboard'
import NavBar from './app/features/layouts/nav/NavBar'
import { useState } from 'react'
import { AppEvent } from './app/types/AppEvent'

function App() {
  const [selectedEvent, setSelectedEvent] = useState<AppEvent | null>(null);
  const handleSelectEvent = (event: AppEvent | null) => {
    setSelectedEvent(event);
    setFormOpen(true);
  };
  const [formOpen, setFormOpen] = useState(false);
  return (
    <>
      <NavBar setFormOpen={setFormOpen} handleSelectedEvent={handleSelectEvent} />
      <Container className='main'>
        <EventDashboard formOpen={formOpen}
          setFormOpen={setFormOpen}
          selectedEvent={selectedEvent}
          handleSelectEvent={handleSelectEvent}

        ></EventDashboard>
      </Container >
    </>
  )
}

export default App
