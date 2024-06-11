import EventListItem from "./EventListItem";

import { AppEvent } from "../../types/AppEvent";

type Props = {
    events: AppEvent[],
    hanldeSelectEvent: (event: AppEvent) => void
};
export default function EventList({ events, hanldeSelectEvent }: Props) {
    return (
        <>
            {events.map((event: AppEvent) => (
                <EventListItem key={event.id} event={event} handleSelectEvent={hanldeSelectEvent} />
            ))}

        </>
    )
}
