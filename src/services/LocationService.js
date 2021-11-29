import locations from '../raw_locations'
import haversine from 'haversine'

const daysOfWeek = { 0: 'Sun', 1: 'Mon', 2: 'Tue', 3: 'Wed', 4: 'Thu', 5: 'Fri', 6: 'Sat' }

/**
 * Get the number of states the user has visited
 * @returns {Number} The number of states visited
 */
export function getStatesVisited () {
    // Placeholder for calculation
    return 5
}

/**
 * Get the number of miles traveled using the given list of location pings
 * @param {Array<Object>} locs An array of location pings
 * @returns {Number} The number of miles traveled between the given locations
 */
function getMilesTraveled (locs) {
    if (locs.length === 0) { return 0 }

    let sum = 0
    let prevLoc = locs[0]
    for (let i = 10; i < locs.length; i += 10) {
        const loc = locs[i]
        const dist = haversine(prevLoc, loc, { unit: 'mile' })

        // If the distance between this ping and 10 pings ago is less than 0.5,
        // it's safe to say the user didn't move
        if (dist > 0.5) { sum += dist }

        prevLoc = loc
    }

    // Account for the last location in the array since it might be skipped
    // using the for-loop counter of i += 10
    const dist = haversine(prevLoc, locs.at(-1), { unit: 'mile' })
    if (dist > 0.5) { sum += dist }

    return Math.round(sum)
}

/**
 * Get the total number of miles the user has traveled using all of the location history
 * @returns {Number} The total number of miles the user has traveled
 */
export function getTotalMilesTraveled () {
    return getMilesTraveled(locations).toLocaleString()
}

/**
 * Get the number of miles traveled for each day of the past week
 * @returns {Array<Object>} The miles traveled on each day of the week
 */
export function getMilesTraveledPastWeek () {
    // hard code new Date(2021, 10, 10) for now since locations are saved locally instead of from API
    const weekLocations = locations.filter(l => new Date(2021, 10, 29).getTime() - l.date < 604800000)

    const result = []
    for (const day of Object.keys(daysOfWeek)) {
        const dayLocations = weekLocations.filter(l => new Date(l.date).getDay() == day)
        result.push({
            name: daysOfWeek[day],
            value: getMilesTraveled(dayLocations)
        })
    }

    console.log(result)
    return result
}

/**
 * Get the number of miles of the user's longest trip
 * @returns {String} The number of miles formatted with commas
 */
export function getLongestTrip () {
    let longestTrip = 0
    let currentTrip = 0

    let prevLoc = locations[0]
    for (let i = 10; i < locations.length; i += 10) {
        const loc = locations[i]
        const dist = haversine(prevLoc, loc, { unit: 'mile' })

        if (dist > 1.5 && dist < 100) {
            currentTrip += dist
        } else {
            longestTrip = Math.max(longestTrip, currentTrip)
            currentTrip = 0
        }

        prevLoc = loc
    }

    return Math.round(longestTrip).toLocaleString() + 'mi'
}

/**
 * Get the average number of miles of all of the user's trips
 * @returns {String} The number of miles formatted with commas
 */
export function getAverageTrip () {
    const totalTrips = { sum: 0, trips: 0 }
    let currentTrip = 0

    let prevLoc = locations[0]
    for (let i = 10; i < locations.length; i += 10) {
        const loc = locations[i]
        const dist = haversine(prevLoc, loc, { unit: 'mile' })

        if (dist > 1.5 && dist < 100) {
            currentTrip += dist
        } else {
            totalTrips.sum += currentTrip
            totalTrips.trips += 1

            currentTrip = 0
        }

        prevLoc = loc
    }

    return Math.round(totalTrips.sum / totalTrips.trips).toLocaleString() + 'mi'
}
