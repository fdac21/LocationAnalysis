import { ACTIONS } from './actions'

const initialState = {
    locations: []
}

function rootReducer (state = initialState, action) {
    const { payload, type } = action
    switch (type) {
    case ACTIONS.SET_LOCATIONS: {
        return { ...state, locations: payload }
    }
    default: {
        return { ...state }
    }
    }
};

export default rootReducer
