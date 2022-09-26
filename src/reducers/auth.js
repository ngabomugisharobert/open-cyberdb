import { createReducer } from '../utility'


export const loggedIn = createReducer({}, {
    'HAS_SIGNED_IN'(state, { data }) {
        if (data) {
            return {
                ...state,
                data,
                status: 200,
                message: "Login successful"
            }
        }
        else {
            return {
                ...state
            }
        }
    }
})