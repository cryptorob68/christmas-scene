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
}; 

// Add this to your existing JavaScript
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