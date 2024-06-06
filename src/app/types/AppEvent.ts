export type AppEvent = {
    id: string,
    title: string,
    date: string,
    description: string,
    city: string,
    venue: string,
    hostedBy: string,
    hostPhotoUrl: string,
    attendees: Attendee[]

}
export type Attendee = {
    id: string,
    name: string,
    photoUrl: string
}