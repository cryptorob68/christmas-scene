window.onload = () => {
    const loading = document.querySelector('#loading');
    const scene = document.querySelector('a-scene');
    const debugDiv = document.createElement('div');
    debugDiv.classList.add('debug-info');
    document.body.appendChild(debugDiv);

    // Ensure the loading screen disappears when the scene is ready
    scene.addEventListener('loaded', () => {
        console.log('Scene loaded successfully.');
        loading.style.display = 'none';
    });

    // Fallback: Hide the loading screen if the event doesn't fire
    setTimeout(() => {
        if (loading.style.display !== 'none') {
            console.warn('Fallback: Hiding the loading screen after 10 seconds.');
            loading.style.display = 'none';
        }
    }, 10000);

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
            console.log(
                `Device GPS: Latitude ${coords.latitude}, Longitude ${coords.longitude}`
            );
        } else {
            debugDiv.innerHTML = `<p>Waiting for GPS data...</p>`;
        }
    }, 1000);
};
