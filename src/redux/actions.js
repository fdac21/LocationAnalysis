export const ACTIONS = {
    SET_LOCATIONS: 'SET_LOCATIONS'
}

export function setLocations (payload) {
    return { type: ACTIONS.SET_LOCATIONS, payload }
}
