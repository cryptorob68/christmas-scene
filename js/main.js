window.onload = () => {
    setInterval(() => {
        const gpsCamera = document.querySelector('[gps-camera]');
        if (gpsCamera && gpsCamera.components['gps-camera']) {
            const coords = gpsCamera.components['gps-camera'].currentCoords || {};
            console.log(`Device Latitude: ${coords.latitude}, Longitude: ${coords.longitude}`);
        } else {
            console.log('Waiting for GPS data...');
        }
    }, 1000);
};
