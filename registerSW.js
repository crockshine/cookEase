if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/recipes/sw.js', { scope: '/recipes/' })})}