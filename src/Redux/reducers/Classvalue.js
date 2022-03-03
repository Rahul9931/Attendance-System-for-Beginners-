import types from "../types";

const initial_state = {
    class_value:'1A'
}

export default function (state = initial_state, action) {
    switch (action.type) {
        case types.CLASSVALUE1A:
            return { class_value:'1A' }
        case types.CLASSVALUE2B:
            return { class_value:'2B' }
        default:
            return { ...state }
    }
}