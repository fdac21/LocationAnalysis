/**
 * This script takes the raw_locations.json file and converts it into
 * weighted coordinates for usage in Google Maps.
 */

import fs from 'fs'

const WEIGHT_SIZE = 0.1
const WEIGHT_UPDATE = 0.5
const WEIGHT_MAX = 5

const locations = JSON.parse(fs.readFileSync("./src/raw_locations.json"))
const coordmap = {}

for (const loc of locations) {
    loc.date = new Date(loc.date).getTime()
    loc.count = 1

    const lat = Math.round(loc.latitude / WEIGHT_SIZE) * WEIGHT_SIZE
    const lng = Math.round(loc.longitude / WEIGHT_SIZE) * WEIGHT_SIZE

    // create empty array
    if (!coordmap[`${lat}-${lng}`]) coordmap[`${lat}-${lng}`] = { lat: lat, lng: lng, weight: 1 }

    coordmap[`${lat}-${lng}`].weight = Math.min(coordmap[`${lat}-${lng}`].weight + WEIGHT_UPDATE, WEIGHT_MAX)
}

const newLocations = Object.keys(coordmap).map(k => coordmap[k])

fs.writeFileSync("./src/locations.json", JSON.stringify(newLocations, 0, 2))