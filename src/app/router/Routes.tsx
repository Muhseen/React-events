import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import EventDashboard from '../features/events/EventDashboard';
import EventForm from '../features/events/form/EventForm';
import EventDetails from '../features/details/EventDetails';
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/events', element: <EventDashboard /> },
            { path: '/events/:id', element: <EventDetails /> },
            { path: '/manage/:id', element: <EventForm /> },
            { path: '/createEvent', element: <EventForm /> }
        ]
    }

]);