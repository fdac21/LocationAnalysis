import locations from '../raw_locations'
import haversine from 'haversine'

export function getStatesVisited () {
    // Placeholder for calculation
    return 7
}

export function getMilesTraveled () {
    let sum = 0

    let prevLoc = locations[0]
    for (const loc of locations.slice(1)) {
        const dist = haversine(prevLoc, loc, { unit: 'mile' })

        // Only sum distances under 5 miles. Distances greater than this are
        // usually an error within the location tracking software
        if (dist < 5) { sum += dist }

        prevLoc = loc
    }

    return Math.round(sum).toLocaleString()
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
