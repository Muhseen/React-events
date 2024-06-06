
import './App.css'
import { Container } from 'semantic-ui-react'
import EventDashboard from './app/features/events/EventDashboard'
import NavBar from './app/features/layouts/nav/NavBar'
import { useState } from 'react'

function App() {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <>
      <NavBar setFormOpen={setFormOpen} />
      <Container className='main'>
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen}></EventDashboard>
      </Container>
    </>
  )
}

export default App
