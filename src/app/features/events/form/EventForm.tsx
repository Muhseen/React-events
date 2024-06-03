
import { Segment, Form, Header, Button } from 'semantic-ui-react'
export default function EventForm() {
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
                        <input type="text" placeholder='Description' />
                    </Form.Field>
                    <Form.Field>
                        <input type="text" placeholder='Description' />
                    </Form.Field>
                    <Form.Field>
                        <input type="text" placeholder='Description' />
                    </Form.Field>
                    <Button type="submit" floated='right'>Submit</Button>
                    <Button type="button" floated='right'>Cancel</Button>
                </Form>
            </Segment>
        </>
    )
}
