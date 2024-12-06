window.onload = () => {
    const loading = document.querySelector('#loading');
    const scene = document.querySelector('a-scene');

    // Ensure the loading screen disappears when the scene is fully loaded
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
    const debugDiv = document.createElement('div');
    debugDiv.classList.add('debug-info');
    document.body.appendChild(debugDiv);

    setInterval(() => {
        const gpsCamera = document.querySelector('[gps-camera]');
        if (gpsCamera && gpsCamera.components['gps-camera']) {
            const coords = gpsCamera.components['gps-camera'].currentCoords || {};
            debugDiv.innerHTML = `
                Device Latitude: ${coords.latitude || 'N/A'}<br>
                Device Longitude: ${coords.longitude || 'N/A'}<br>
                Anchor Latitude: 38.4007059834491<br>
                Anchor Longitude: -121.47344204937477
            `;
            console.log(
                `Device GPS: Latitude ${coords.latitude}, Longitude ${coords.longitude}`
            );
        }
    }, 1000);
};
