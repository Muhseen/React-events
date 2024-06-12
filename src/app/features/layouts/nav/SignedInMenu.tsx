
import { Link, useNavigate } from 'react-router-dom'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

type Props = {
    setAuth: (auth: boolean) => void
}
export default function SignedInMenu({ setAuth }: Props) {
    const navigate = useNavigate();
    const handleSignOut = () => {
        setAuth(false);
        navigate('/')
    }
    return (
        <Menu.Item position='right'>
            <Image src='/user.png' height="40px" circular spaced='right' />
            <Dropdown pointing='top right' text='Bob'>
                <Dropdown.Menu>                <Dropdown.Item as={Link} to="/createEvent" text='Create Event' icon='plus' />

                    <Dropdown.Item text="My Profile" icon="user" />
                    <Dropdown.Item text="Sign out" icon="power" onClick={handleSignOut} />
                </Dropdown.Menu>

            </Dropdown>
        </Menu.Item>
    )
}
