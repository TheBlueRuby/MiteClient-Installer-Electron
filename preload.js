const { ipcRenderer } = require('electron');

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('closeBtn').addEventListener('click', () => {
        console.log("Close Button Clicked!");
        ipcRenderer.invoke('quit-app');
    });
})