import { AppEvent } from './../types/AppEvent';
import dummyData from '../utils/data'

type State = {
    events: AppEvent[]
}
const initialState: State = {
    events: dummyData
}
export const eventSlice = createSlice({
    name: "events",
    initialState,
    reducers: {}
}
)
