if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/cookEase/sw.js', { scope: '/cookEase/' })})}