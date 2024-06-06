import EventListItem from "./EventListItem";

import { AppEvent } from "../../types/AppEvent";

type Props = {
    events: AppEvent[]
};
export default function EventList({ events }: Props) {
    return (
        <>
            {events.map((event: AppEvent) => (
                <EventListItem key={event.id} event={event} />
            ))}

        </>
    )
}
