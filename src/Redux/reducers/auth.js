import types from "../types";

const initial_state = {
    myState: false
}

export default function (state = initial_state, action) {
    switch (action.type) {
        case types.SHOW:
            return { myState: true }
        case types.HIDE:
            return { myState: false }
        default:
            return { ...state }
    }
}