import { Container, Menu, MenuItem, Button } from 'semantic-ui-react'
import { AppEvent } from '../../../types/AppEvent';
import { NavLink } from 'react-router-dom'
import SignedOutBUttons from './SignedOutBUttons';
import SignedInMenu from './SignedInMenu';
import { useState } from 'react';
//import logo from '../../public/assets/logo.png';

export default function NavBar() {
    const [auth, setAuth] = useState<boolean>(false);
    return (
        <Menu inverted={true} fixed='top'>
            <Container>
                <MenuItem header as={NavLink} to="/">
                    <img src="logo.png" alt="logo" />
                </MenuItem>
                <MenuItem name="Events" as={NavLink} to="/events" />
                <MenuItem name="Scratch" as={NavLink} to="/scratch" />
                <MenuItem>
                    <Button onClick={() => { }} floated='right' positive={true} inverted={true} content="Create event">
                    </Button>
                </MenuItem>
                {auth ? <SignedInMenu setAuth={setAuth} />
                    : <SignedOutBUttons setAuth={setAuth} />}
            </Container>
        </Menu>

    );
}
