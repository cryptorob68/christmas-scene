window.onload = () => {
    // Hide loading screen
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
        const anchor = document.querySelector('#grid-anchor');
        if (gpsCamera && anchor) {
            const cameraPos = gpsCamera.components['gps-camera'].currentCoords;
            debugDiv.innerHTML = `
                GPS Latitude: ${cameraPos.latitude}<br>
                GPS Longitude: ${cameraPos.longitude}<br>
                Anchor Latitude: 38.41802933198222<br>
                Anchor Longitude: -121.47271463679319
            `;
        }
    }

    setInterval(updateDebugInfo, 1000);
};
