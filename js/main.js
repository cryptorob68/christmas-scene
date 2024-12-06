window.onload = () => {
    // Hide loading screen when everything is loaded
    const loading = document.querySelector('#loading');
    
    document.querySelector('a-scene').addEventListener('loaded', () => {
        loading.style.display = 'none';
    });

    // Handle location errors
    if (!navigator.geolocation) {
        alert('Geolocation is not supported by your browser');
        return;
    }

    // Add orientation handling
    window.addEventListener('orientationchange', function() {
        const scene = document.querySelector('a-scene');
        const container = document.querySelector('#models-container');
        
        // Wait for orientation change to complete
        setTimeout(() => {
            if (window.orientation === 90 || window.orientation === -90) {
                // Landscape mode
                container.setAttribute('position', '0 0 0');
                container.setAttribute('rotation', '0 -350 0');
            } else {
                // Portrait mode
                container.setAttribute('position', '0 0 0');
                container.setAttribute('rotation', '0 -350 0');
            }
            // Force scene refresh
            scene.object3D.updateMatrixWorld(true);
        }, 100);
    });

    // Add debug info
    const debugDiv = document.createElement('div');
    debugDiv.classList.add('debug-info');
    document.body.appendChild(debugDiv);

    function updateDebugInfo() {
        const container = document.querySelector('#models-container');
        if (container) {
            debugDiv.innerHTML = `
                Orientation: ${window.orientation}<br>
                Container Rotation: ${container.getAttribute('rotation').y}<br>
                Width: ${window.innerWidth}<br>
                Height: ${window.innerHeight}
            `;
        }
    }

    setInterval(updateDebugInfo, 1000);
};

// Keep existing scale-on-distance component
AFRAME.registerComponent('scale-on-distance', {
    schema: {
        maxScale: {default: 2},
        minScale: {default: 0.5}
    },

    tick: function() {
        const distance = this.el.getAttribute('distance');
        if (distance) {
            let scale = 1 / distance;
            scale = Math.min(Math.max(scale, this.data.minScale), this.data.maxScale);
            this.el.setAttribute('scale', `${scale} ${scale} ${scale}`);
        }
    }
});
