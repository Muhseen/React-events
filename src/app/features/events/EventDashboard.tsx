
import { Grid } from 'semantic-ui-react'
import EventList from './EventList'
import EventForm from './form/EventForm'
import dummyData from "../../utils/data";
import { useEffect, useState } from 'react';
import { AppEvent } from '../../types/AppEvent';

type props = {
    formOpen: boolean,
    setFormOpen: (value: boolean) => void
    selectedEvent: AppEvent | null
    handleSelectEvent: (event: AppEvent | null) => void
}
export default function EventDashboard({ formOpen, setFormOpen, handleSelectEvent, selectedEvent }: props) {
    const [events, setEvents] = useState<AppEvent[]>([]);
    useEffect(() => {
        setEvents(dummyData)
    }, [])

    const handleAddEvent = (eventToAdd: AppEvent) => {
        setEvents([...events, eventToAdd]);
    }
    const handleUpdateEvent = (updatedEvent: AppEvent) => {
        setEvents(
            events.map(evt => evt.id == updatedEvent.id ? updatedEvent : evt)
        );
        handleSelectEvent(null);


    }

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={events} hanldeSelectEvent={handleSelectEvent} />
            </Grid.Column>
            <Grid.Column width={6}>
                {formOpen && <EventForm key={selectedEvent ? selectedEvent.id : 'create'} setFormOpen={setFormOpen} handleAddEvent={handleAddEvent} selectedEvent={selectedEvent} />}
            </Grid.Column>
        </Grid>
    )
}
