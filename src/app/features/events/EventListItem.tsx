import { Segment, SegmentGroup, ItemGroup, Item, Icon, List, Button } from 'semantic-ui-react'
import EventListAttendee from './EventListAttendee'
import { AppEvent, Attendee } from '../../types/AppEvent'

type Props = {
    event: AppEvent
};
export default function EventListItem({ event }: Props) {
    return (
        <SegmentGroup>
            <Segment>
                <ItemGroup>
                    <Item>
                        <Item.Image size='tiny' circular src='/user.png' />
                        <Item.Content>
                            <Item.Header>
                                {event.title}

                            </Item.Header>
                            <Item.Description>
                                {event.hostedBy}
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </ItemGroup>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' />{new Date(event.date).toLocaleDateString()}
                    <Icon name='marker' />{event.venue}
                </span>
            </Segment>
            <Segment>
                <List horizontal>
                    {
                        event.attendees.map((attendee: Attendee) => (
                            <EventListAttendee attendee={attendee} key={attendee.id} />
                        ))
                    }
                </List>
            </Segment>
            <Segment clearing>
                <span>{event.description}</span>
                <Button color='teal' floated='right' content='View'></Button>
            </Segment>
        </SegmentGroup>
    )
}
