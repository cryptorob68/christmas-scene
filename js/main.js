window.onload = () => {
    const loading = document.querySelector('#loading');
    const scene = document.querySelector('a-scene');

    // Hide the loading screen when the scene is ready
    scene.addEventListener('loaded', () => {
        loading.style.display = 'none';
    });

    // Fallback in case the 'loaded' event doesn't fire properly
    setTimeout(() => {
        if (loading.style.display !== 'none') {
            console.warn('Fallback: Hiding the loading screen after 10 seconds.');
            loading.style.display = 'none';
        }
    }, 10000); // Fallback after 10 seconds
};
