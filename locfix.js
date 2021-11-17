/**
 * This script takes the default locations.json output from the
 * database and applies some mapping on the data.
 */

import fs from 'fs'

const locations = JSON.parse(fs.readFileSync("./src/locations.json"))
const newLocations = []

for (const loc of locations) {
    loc.date = new Date(loc.date).getTime()
    newLocations.push(loc)
}

fs.writeFileSync("fixed_locations.json", JSON.stringify(newLocations, 0, 2))