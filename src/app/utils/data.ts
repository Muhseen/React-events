import { AppEvent } from "../types/AppEvent"

const dummyData: AppEvent[] = [
    {
        id: "1",
        title: "Tech Conference 2024",
        date: "2024-08-12T09:00:00Z",
        description: "An exciting conference about the latest in tech.",
        city: "San Francisco",
        venue: "Moscone Center",
        hostedBy: "Tech Corp",
        hostPhotoUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGhvc3R8ZW58MHx8fHwxNjIwMzA0NjI5&ixlib=rb-1.2.1&q=80&w=400",
        attendees: [
            {
                id: "a1",
                name: "Alice Smith",
                photoUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGV4YW1wbGV8ZW58MHx8fHwxNjIwMzA0NjI5&ixlib=rb-1.2.1&q=80&w=400"
            },
            {
                id: "a2",
                name: "Bob Johnson",
                photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGV4YW1wbGV8ZW58MHx8fHwxNjIwMzA0NjI5&ixlib=rb-1.2.1&q=80&w=400"
            }
        ]
    },
    {
        id: "2",
        title: "Art & Design Expo",
        date: "2024-09-05T10:00:00Z",
        description: "Explore the latest trends in art and design.",
        city: "New York",
        venue: "Javits Center",
        hostedBy: "ArtWorld",
        hostPhotoUrl: "https://images.unsplash.com/photo-1573497019418-45b2f4bc61e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGhvc3R8ZW58MHx8fHwxNjIwMzA0NjI5&ixlib=rb-1.2.1&q=80&w=400",
        attendees: [
            {
                id: "a3",
                name: "Carol White",
                photoUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGV4YW1wbGV8ZW58MHx8fHwxNjIwMzA0NjI5&ixlib=rb-1.2.1&q=80&w=400"
            },
            {
                id: "a4",
                name: "David Green",
                photoUrl: "https://images.unsplash.com/photo-1506794778212-e0e3ff09dbac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGV4YW1wbGV8ZW58MHx8fHwxNjIwMzA0NjI5&ixlib=rb-1.2.1&q=80&w=400"
            }
        ]
    },
    {
        id: "3",
        title: "Music Fest 2024",
        date: "2024-07-20T15:00:00Z",
        description: "Join us for a day of great music and fun.",
        city: "Los Angeles",
        venue: "LA Coliseum",
        hostedBy: "Music Mania",
        hostPhotoUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGhvc3R8ZW58MHx8fHwxNjIwMzA0NjI5&ixlib=rb-1.2.1&q=80&w=400",
        attendees: [
            {
                id: "a5",
                name: "Eve Black",
                photoUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGV4YW1wbGV8ZW58MHx8fHwxNjIwMzA0NjI5&ixlib=rb-1.2.1&q=80&w=400"
            },
            {
                id: "a6",
                name: "Frank Brown",
                photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGV4YW1wbGV8ZW58MHx8fHwxNjIwMzA0NjI5&ixlib=rb-1.2.1&q=80&w=400"
            }
        ]
    },
    {
        id: "4",
        title: "Startup Pitch Night",
        date: "2024-06-30T18:00:00Z",
        description: "Watch the best startups pitch their ideas.",
        city: "Austin",
        venue: "Capital Factory",
        hostedBy: "Startup Inc.",
        hostPhotoUrl: "https://images.unsplash.com/photo-1531386156007-8ec29ce8dcf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGhvc3R8ZW58MHx8fHwxNjIwMzA0NjI5&ixlib=rb-1.2.1&q=80&w=400",
        attendees: [
            {
                id: "a7",
                name: "Grace Lee",
                photoUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGV4YW1wbGV8ZW58MHx8fHwxNjIwMzA0NjI5&ixlib=rb-1.2.1&q=80&w=400"
            },
            {
                id: "a8",
                name: "Henry King",
                photoUrl: "https://images.unsplash.com/photo-1506794778212-e0e3ff09dbac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGV4YW1wbGV8ZW58MHx8fHwxNjIwMzA0NjI5&ixlib=rb-1.2.1&q=80&w=400"
            }
        ]
    }
];
export default dummyData;