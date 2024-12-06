window.onload = () => {
    const debugDiv = document.createElement('div');
    debugDiv.classList.add('debug-info');
    document.body.appendChild(debugDiv);

    // Debugging GPS coordinates
    setInterval(() => {
        const gpsCamera = document.querySelector('[gps-camera]');
        if (gpsCamera && gpsCamera.components['gps-camera']) {
            const coords = gpsCamera.components['gps-camera'].currentCoords || {};
            debugDiv.innerHTML = `
                <p>Device Latitude: ${coords.latitude || 'N/A'}</p>
                <p>Device Longitude: ${coords.longitude || 'N/A'}</p>
                <p>Anchor Latitude: 38.4007059834491</p>
                <p>Anchor Longitude: -121.47344204937477</p>
            `;
        } else {
            debugDiv.innerHTML = `<p>Waiting for GPS data...</p>`;
        }
    }, 1000);
};
