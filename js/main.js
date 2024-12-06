window.onload = () => {
    // Hide loading screen when everything is loaded
    const loading = document.querySelector('#loading');
    document.querySelector('a-scene').addEventListener('loaded', () => {
        loading.style.display = 'none';
    });

    // Debugging positions
    const debugDiv = document.createElement('div');
    debugDiv.classList.add('debug-info');
    document.body.appendChild(debugDiv);

    function updateDebugInfo() {
        const gpsCamera = document.querySelector('[gps-camera]');
        if (gpsCamera) {
            const position = gpsCamera.components['gps-camera'].currentCoords;
            debugDiv.innerHTML = `
                GPS Latitude: ${position.latitude}<br>
                GPS Longitude: ${position.longitude}
            `;
        }
    }

    setInterval(updateDebugInfo, 1000);
};
