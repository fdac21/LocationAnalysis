import locations from '../raw_locations'
import haversine from 'haversine'

const daysOfWeek = { 0: 'Sun', 1: 'Mon', 2: 'Tue', 3: 'Wed', 4: 'Thu', 5: 'Fri', 6: 'Sat' }

export function getStatesVisited () {
    // Placeholder for calculation
    return 7
}

function getMilesTraveled (locs) {
    let sum = 0

    if (locs.length === 0) { return sum }

    let prevLoc = locs[0]
    for (const loc of locs.slice(1)) {
        const dist = haversine(prevLoc, loc, { unit: 'mile' })

        // Only sum distances under 2 miles. Distances greater than this are
        // usually an error within the location tracking software
        if (dist < 2) { sum += dist }

        prevLoc = loc
    }

    return Math.round(sum)
}

export function getTotalMilesTraveled () {
    return getMilesTraveled(locations).toLocaleString()
}

export function getMilesTraveledPastWeek () {
    // hard code new Date(2021, 10, 10) for now since locations are saved locally instead of from API
    const weekLocations = locations.filter(l => new Date(2021, 10, 10).getTime() - l.date < 604800000)

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

export function getLongestTrip () {
    let longestTrip = 0
    let currentTrip = 0

    let prevLoc = locations[0]
    for (let i = 10; i < locations.length; i += 10) {
        const loc = locations[i]
        const dist = haversine(prevLoc, loc, { unit: 'mile' })

        if (dist > 5) {
            currentTrip += dist
        } else {
            if (currentTrip < 3000) {
                longestTrip = Math.max(longestTrip, currentTrip)
            }

            currentTrip = 0
        }

        prevLoc = loc
    }

    return Math.round(longestTrip).toLocaleString() + 'mi'
}

export function getAverageTrip () {
    const totalTrips = { sum: 0, trips: 0 }
    let currentTrip = 0

    let prevLoc = locations[0]
    for (let i = 10; i < locations.length; i += 10) {
        const loc = locations[i]
        const dist = haversine(prevLoc, loc, { unit: 'mile' })

        if (dist > 5) {
            currentTrip += dist
        } else {
            if (currentTrip < 500) {
                totalTrips.sum += currentTrip
                totalTrips.trips += 1
            }

            currentTrip = 0
        }

        prevLoc = loc
    }

    return Math.round(totalTrips.sum / totalTrips.trips).toLocaleString() + 'mi'
}
