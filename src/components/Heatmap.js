/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React, { useEffect } from 'react'
import locations from '../weighted_locations'

const heatmapData = locations.map(l => {
    return { location: new google.maps.LatLng(l.lat, l.lng), weight: l.weight }
})

const Heatmap = () => {
    useEffect(() => {
        const map = new google.maps.Map(document.getElementById('map'), {
            center: new google.maps.LatLng(35.9346591, -84.1636153),
            zoom: 5,
            maxZoom: 7,
            minZoom: 2,
            mapTypeId: 'hybrid',
            disableDefaultUI: true
        })

        console.log(heatmapData)
        const heatmap = new google.maps.visualization.HeatmapLayer({
            data: heatmapData
        })

        heatmap.setMap(map)
    }, [])

    return (
        <div id="map" style={{ height: 500, width: '100%' }}>
        </div>
    )
}

export default Heatmap
