const { app, BrowserWindow} = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

isDev && require('electron-reload')(__dirname, {
  electron: require('../node_modules/electron')
});

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 800, height: 600, webPreferences: { nodeIntegration: true } });

  mainWindow.loadURL(isDev ? 'http://localhost:8080' : `file://${path.join(__dirname, 'index.html')}`);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
