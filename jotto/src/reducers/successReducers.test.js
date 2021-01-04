import {actionTypes} from "../actions"
import successReducer from "./successReducer"

test ("returns default initial state of 'false' when action is passed", ()=> {
    const newState = successReducer(undefined, {})
    expect(newState).toBe(false)
})

test("returns state of 'true' when uon receiving an action of type 'CORREcT__GUESS'", () => {
    const newState = successReducer(undefined, {type: actionTypes.CORRECT_GUESS})
    expect(newState).toBe(true)

})