import React, { useState, useEffect } from 'react';
import {
    Map,
    AdvancedMarker,
    APIProvider
} from '@vis.gl/react-google-maps';

const TestMap: React.FC = () => {
    const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
    const token = "AIzaSyBZt0TMinHsTorL2FHo9nTBGgbKR09R2ug";

    const getUserLocation = async () => {
        try {
            const position = await new Promise<GeolocationPosition>((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            });

            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });

            // Call the reverse geocoding function here
            reversedGeocode(latitude, longitude);
        } catch (error) {
            console.error('Error getting location:', error);
        }
    };

    const reversedGeocode = (latitude: number, longitude: number) => {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${token}`)
            .then((response) => response.json())
            .then((data) => { console.log(data?.results[0].address_components) });
    };

    useEffect(() => {
        getUserLocation();
    }, []);

    const position = { lat: location?.latitude || 34.7749, lng: location?.longitude || -9.4194 };

    return (
        <APIProvider apiKey={token}>
            <div style={{ width: "50vw", height: "50vh" }}>
                {location ? (
                    <Map zoom={15} center={position} mapId={"22ddd4621e64ce20"}>
                        <AdvancedMarker position={position} />
                    </Map>
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </APIProvider>
    );
};

export default TestMap;
