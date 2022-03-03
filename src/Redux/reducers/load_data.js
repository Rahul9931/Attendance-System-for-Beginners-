import types from "../types";

const initial_state = {
loadData: 0
}

export default function (state = initial_state, action) {
    switch (action.type) {
        case types.LOAD_DATA:
            const data=action.payload
            return { loadData:data }
        default:
            return { ...state }
    }
}