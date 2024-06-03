
import './App.css'
import { Container } from 'semantic-ui-react'
import EventDashboard from './app/features/events/EventDashboard'
import NavBar from './app/features/layouts/nav/NavBar'

function App() {

  return (
    <>
      <NavBar />
      <Container className='main'>
        <EventDashboard></EventDashboard>
      </Container>
    </>
  )
}

export default App
