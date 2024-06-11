import { Container, Menu, MenuItem, Button } from 'semantic-ui-react'
import { AppEvent } from '../../../types/AppEvent';
import { NavLink } from 'react-router-dom'
//import logo from '../../public/assets/logo.png';
type props = {
    setFormOpen: (value: boolean) => void
    handleSelectedEvent: (event: AppEvent | null) => void
}
export default function NavBar({ setFormOpen, handleSelectedEvent }: props) {
    return (
        <Menu inverted={true} fixed='top'>
            <Container>
                <MenuItem header>
                    <img src="logo.png" alt="logo" />
                </MenuItem>
                <MenuItem name="Events" as={NavLink} to="/events" />
                <MenuItem name="Scratch" as={NavLink} to="/scratch" />
                <MenuItem>
                    <Button onClick={() => { setFormOpen(true); handleSelectedEvent(null); }} floated='right' positive={true} inverted={true} content="Create event">
                    </Button>
                </MenuItem>
                <MenuItem position='right'>
                    <Button basic inverted content="Login" />
                    <Button basic inverted content="Register" style={{ marginLeft: '0.5em' }} />
                </MenuItem>
            </Container>
        </Menu>

    );
}
