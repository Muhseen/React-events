
import { Grid } from 'semantic-ui-react'
import EventList from './EventList'
import EventForm from './form/EventForm'
import dummyData from "../../utils/data";
import { useEffect, useState } from 'react';
import { AppEvent } from '../../types/AppEvent';

type props = {
    formOpen: boolean,
    setFormOpen: (value: boolean) => void
}
export default function EventDashboard({ formOpen, setFormOpen }: props) {
    const [events, setEvents] = useState<AppEvent[]>([]);
    useEffect(() => {
        setEvents(dummyData)
    }, [])
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={events} />
            </Grid.Column>
            <Grid.Column width={6}>
                {formOpen && <EventForm setFormOpen={setFormOpen} />}
            </Grid.Column>
        </Grid>
    )
}
