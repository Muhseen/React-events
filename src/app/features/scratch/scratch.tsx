import { Button } from "semantic-ui-react"
import { useAppDispatch, useAppSelector } from "../../store/store"
import { decrement, increment, incrementByAmount } from "../../store/testSlice"

export default function scratch() {
    const { data } = useAppSelector(state => state.test)
    const dispatch = useAppDispatch()
    return (
        <div>
            <h1> Scratch Page</h1>
            <h3>The data is: {data} </h3>
            <Button onClick={() => dispatch(increment())} color="green" content="Incremenr" />
            <Button onClick={() => dispatch(decrement())} color="red" content="Decrement" />
            <Button onClick={() => dispatch(incrementByAmount(5))} color="teal" content="Increment By 5" />
        </div>
    )
}
