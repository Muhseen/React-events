
import './App.css'
import { Container } from 'semantic-ui-react'
import NavBar from './app/features/layouts/nav/NavBar'
import { Outlet, useLocation } from 'react-router-dom'
import HomePage from './app/features/home/HomePage';

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname == "/" ? <HomePage /> : (
        <>
          <NavBar />
          <Container className='main'>
            <Outlet />

          </Container >
        </>
      )}
    </>
  )
}

export default App
