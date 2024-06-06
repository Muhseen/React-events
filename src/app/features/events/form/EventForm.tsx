
import { Segment, Form, Header, Button } from 'semantic-ui-react'
type props = {
    setFormOpen: (value: boolean) => void
}

export default function EventForm({ setFormOpen }: props) {
    return (
        <>
            <Segment clearing>
                <Header content='Create Event' />
                <Form>
                    <Form.Field>
                        <input type="text" placeholder='Name' />
                    </Form.Field>
                    <Form.Field>
                        <input type="text" placeholder='City' />
                    </Form.Field>
                    <Form.Field>
                        <input type="text" placeholder='Hosted By' />
                    </Form.Field>
                    <Form.Field>
                        <input type="text" placeholder='Venue' />
                    </Form.Field>
                    <Form.Field>
                        <input type="text" placeholder='Description' />
                    </Form.Field>
                    <Button type="submit" floated='right'>Submit</Button>
                    <Button type="button" floated='right' onClick={() => setFormOpen(false)}>Cancel</Button>
                </Form>
            </Segment>
        </>
    )
}
