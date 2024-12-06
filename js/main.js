window.onload = () => {
    const loading = document.querySelector('#loading');
    const scene = document.querySelector('a-scene');

    // Ensure the loading screen hides when the scene is fully loaded
    scene.addEventListener('loaded', () => {
        loading.style.display = 'none';
    });

    // Fallback in case the 'loaded' event doesn't fire properly
    setTimeout(() => {
        if (loading.style.display !== 'none') {
            console.warn('Scene took too long to load. Hiding loading screen as fallback.');
            loading.style.display = 'none';
        }
    }, 10000); // Fallback after 10 seconds

    // Debugging positions (optional)
    const debugDiv = document.createElement('div');
    debugDiv.classList.add('debug-info');
    document.body.appendChild(debugDiv);

    function updateDebugInfo() {
        const gpsCamera = document.querySelector('[gps-camera]');
        if (gpsCamera && gpsCamera.components['gps-camera']) {
            const position = gpsCamera.components['gps-camera'].currentCoords || {};
            debugDiv.innerHTML = `
                GPS Latitude: ${position.latitude || 'unknown'}<br>
                GPS Longitude: ${position.longitude || 'unknown'}
            `;
        }
    }

    setInterval(updateDebugInfo, 1000);
};
