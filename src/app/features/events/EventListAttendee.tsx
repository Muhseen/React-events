import { List, Image } from 'semantic-ui-react'
import { Attendee } from '../../types/AppEvent'

type props = {
    attendee: Attendee
}
export default function EventListAttendee({ attendee }: props) {
    return (
        <>
            <List.Item>
                <Image size='mini' circular src={attendee.photoUrl} />
            </List.Item>
        </>
    )
}
