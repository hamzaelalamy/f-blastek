import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const Map = ({ onCoordinatesChange }) => {
    const mapContainerRef = useRef(null);
    const token = "AIzaSyBZt0TMinHsTorL2FHo9nTBGgbKR09R2ug";


    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiZWxlbDIwMDAiLCJhIjoiY2x3Zmw1cDE1MWZqNzJscG44ZWV5MXFtbyJ9.hhXDnBcf6PQirywPgJWaig'; // Replace with your access token
        if (mapboxgl.getRTLTextPluginStatus() === 'unavailable') {
            mapboxgl.setRTLTextPlugin(
                'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
                null,
                true // Lazy load the plugin
            );
        }

        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-6, 32],
            zoom: 5
        });

        const canvas = map.getCanvasContainer();

        const geojson = {
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-6, 32]
                    }
                }
            ]
        };

        function updateMarkerPosition() {
            const center = map.getCenter();
            geojson.features[0].geometry.coordinates = [center.lng, center.lat];
            map.getSource('point').setData(geojson);
        }

        const reversedGeocode = (latitude: number, longitude: number) => {
            fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${token}`)
                .then((response) => response.json())
                .then((data) => { console.log(data?.results[0].address_components) });
        };

        function onMove(e) {
            const coords = e.lngLat;
            canvas.style.cursor = 'grabbing';
            geojson.features[0].geometry.coordinates = [coords.lng, coords.lat];
            map.getSource('point').setData(geojson);
        }

        function onUp(e) {
            const coords = e.lngLat;
            canvas.style.cursor = '';

            if (onCoordinatesChange) {
                onCoordinatesChange({ lng: coords.lng, lat: coords.lat });
            }
            console.log(coords)
            reversedGeocode(coords.lat, coords.lng);

            map.off('mousemove', onMove);
            map.off('touchmove', onMove);
        }

        map.on('zoom', () => {
            updateMarkerPosition();
        });

        map.on('load', () => {
            map.loadImage(
                'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png',
                (error, image) => {
                    if (error) throw error;
                    map.addImage('custom-marker', image);
                    map.addSource('point', {
                        type: 'geojson',
                        data: geojson
                    });
                    map.addLayer({
                        id: 'point',
                        type: 'symbol',
                        source: 'point',
                        layout: {
                            'icon-image': 'custom-marker',
                            'icon-size': 0.08,
                            'icon-allow-overlap': true
                        }
                    });
                }
            );

            map.on('mouseenter', 'point', () => {
                canvas.style.cursor = 'move';
            });

            map.on('mousedown', 'point', (e) => {
                e.preventDefault();
                canvas.style.cursor = 'grab';

                map.on('mousemove', onMove);
                map.once('mouseup', onUp);
            });

            map.on('touchstart', 'point', (e) => {
                if (e.points.length !== 1) return;
                e.preventDefault();

                map.on('touchmove', onMove);
                map.once('touchend', onUp);
            });
        });

        return () => map.remove();
    }, [onCoordinatesChange]);

    return (
        <div className='mx-auto mt-4 ' ref={mapContainerRef} style={{ width: '96%', height: '400px', marginBottom: "45px" }} />
    );
};

export default Map;