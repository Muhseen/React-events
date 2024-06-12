
import { Grid } from 'semantic-ui-react'
import EventList from './EventList'
import EventForm from './form/EventForm'
import dummyData from "../../utils/data";
import { useEffect, useState } from 'react';
import { AppEvent } from '../../types/AppEvent';


export default function EventDashboard() {
    const [events, setEvents] = useState<AppEvent[]>([]);
    useEffect(() => {
        setEvents(dummyData)
    }, [])

    // const handleAddEvent = (eventToAdd: AppEvent) => {
    //     setEvents([...events, eventToAdd]);
    // }
    // const handleUpdateEvent = (updatedEvent: AppEvent) => {
    //     setEvents(
    //         events.map(evt => evt.id == updatedEvent.id ? updatedEvent : evt)
    //     );
    //     handleSelectEvent(null);


    // }

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={events} />
            </Grid.Column>
            <Grid.Column width={6}>
                <h2>Filters</h2>
            </Grid.Column>
        </Grid>
    )
}
