import { Segment, SegmentGroup, ItemGroup, Item, Icon, List, Button } from 'semantic-ui-react'
import EventListAttendee from './EventListAttendee'
export default function EventListItem() {
    return (
        <SegmentGroup>
            <Segment>
                <ItemGroup>
                    <Item>
                        <Item.Image size='tiny' circular src='/user.png' />
                        <Item.Content>
                            <Item.Header>
                                Event title

                            </Item.Header>
                            <Item.Description>
                                Hosted By Muhsin
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </ItemGroup>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' />
                    <Icon name='marker' />
                </span>
            </Segment>
            <Segment>
                <List horizontal>
                    <EventListAttendee />
                    <EventListAttendee />
                    <EventListAttendee />
                </List>
            </Segment>
            <Segment clearing>
                <span>Descriptopn of Event</span>
                <Button color='teal' floated='right' content='View'></Button>
            </Segment>
        </SegmentGroup>
    )
}
