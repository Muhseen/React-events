
import { ChangeEvent, useState } from 'react'
import { Segment, Form, Header, Button } from 'semantic-ui-react'
import { AppEvent } from '../../../types/AppEvent'
import { createId } from '@paralleldrive/cuid2'
type props = {
    setFormOpen: (value: boolean) => void,
    handleAddEvent: (event: AppEvent) => void,
    selectedEvent: AppEvent | null,

}

export default function EventForm({ setFormOpen, handleAddEvent, selectedEvent }: props) {
    const initialValues = selectedEvent ?? {
        id: '',
        title: '',
        date: '',
        description: '',
        city: '',
        venue: '',
        hostedBy: '',
        hostPhotoUrl: '',
        attendees: []
    }
    const [values, setValues] = useState<AppEvent>(initialValues)
    function onSubmit() {
        console.log(values);
        handleAddEvent(values);
        setValues(initialValues)
    }
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value, id: createId() });
    }
    return (
        <>
            <Segment clearing>
                <Header content='Create Event' />
                <Form onSubmit={onSubmit}>
                    <Form.Field>
                        <input type="text" placeholder='Title' name="title" value={values?.title} onChange={(e) => { handleInputChange(e) }} />
                    </Form.Field>
                    <Form.Field>
                        <input type="text" placeholder='Name' name="hostedBy" value={values?.hostedBy} onChange={(e) => { handleInputChange(e) }} />
                    </Form.Field>
                    <Form.Field>
                        <input type="text" placeholder='City' name="city" value={values?.city} onChange={(e) => { handleInputChange(e) }} />
                    </Form.Field>
                    <Form.Field>
                        <input type="date" placeholder='Date' name="date" value={values?.date} onChange={(e) => { handleInputChange(e) }} />
                    </Form.Field>
                    <Form.Field>
                        <input type="text" placeholder='Venue' name="venue" value={values?.venue} onChange={(e) => { handleInputChange(e) }} />
                    </Form.Field>
                    <Form.Field>
                        <input type="text" placeholder='Description' name="description" value={values?.description} onChange={(e) => { handleInputChange(e) }} />
                    </Form.Field>
                    <Button type="submit" floated='right'>Submit</Button>
                    <Button type="button" floated='right' onClick={() => setFormOpen(false)}>Cancel</Button>
                </Form>
            </Segment>
        </>
    )
}
