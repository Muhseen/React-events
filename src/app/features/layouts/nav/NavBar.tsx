import { Container, Menu, MenuItem, Button } from 'semantic-ui-react'
//import logo from '../../public/assets/logo.png';
type props = {
    setFormOpen: (value: boolean) => void
}
export default function NavBar({ setFormOpen }: props) {
    return (
        <Menu inverted={true} fixed='top'>
            <Container>
                <MenuItem header>
                    <img src="logo.png" alt="logo" />
                </MenuItem>
                <MenuItem name="Events" />
                <MenuItem>
                    <Button onClick={() => setFormOpen(true)} floated='right' positive={true} inverted={true} content="Create event">
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
