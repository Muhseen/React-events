import { Button, Menu } from "semantic-ui-react"

type Props = {
    setAuth: (auth: boolean) => void
}
export default function SignedOutBUttons({ setAuth }: Props) {
    return (
        <div>

            <Menu.Item position='right'>
                <Button basic inverted content="Login" onClick={() => { setAuth(true) }} />
                <Button basic inverted content="Register" style={{ marginLeft: '0.5em' }} />
            </Menu.Item>

        </div>
    )
}
