/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React, { useEffect } from 'react'
import locations from '../weighted_locations'

const Heatmap = () => {
    useEffect(() => {
        return

        const heatmapData = locations.map(l => {
            return { location: new google.maps.LatLng(l.lat, l.lng), weight: l.weight }
        })

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
        <div id="map" style={{ height: 600, width: '100%', backgroundColor: 'gray', borderRadius: '15px' }}>
        </div>
    )
}

export default Heatmap
