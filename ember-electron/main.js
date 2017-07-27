/* eslint-env node */
const { app, BrowserWindow, protocol, ipcMain } = require('electron');
const { dirname, join, resolve } = require('path');
const protocolServe = require('electron-protocol-serve');
//const { api } = require('@slide/api');

let baseDir = __dirname || resolve(dirname(''));

let mainWindow = null;
let authWindow = null;

// Registering a protocol & schema to serve our Ember application
protocol.registerStandardSchemes(['serve'], { secure: true });
protocolServe({
	cwd: join(baseDir, '..', 'ember'),
	app,
	protocol,
});

// Uncomment the lines below to enable Electron's crash reporter
// For more information, see http://electron.atom.io/docs/api/crash-reporter/
// electron.crashReporter.start({
//     productName: 'YourName',
//     companyName: 'YourCompany',
//     submitURL: 'https://your-domain.com/url-to-submit',
//     autoSubmit: true
// });

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('ready', () => {

	//let server = api();

	mainWindow = new BrowserWindow({
		width: 1600,
		height: 1200
	});

	authWindow = createAuthWindow();

	// If you want to open up dev tools programmatically, call
	mainWindow.openDevTools();

	const emberAppLocation = 'serve://dist';

	// Load the ember application using our custom protocol/scheme
	mainWindow.loadURL(emberAppLocation);

	// If a loading operation goes wrong, we'll send Electron back to
	// Ember App entry point
	mainWindow.webContents.on('did-fail-load', () => {
		mainWindow.loadURL(emberAppLocation);
	});

	mainWindow.webContents.on('crashed', () => {
		console.log('Your Ember app (or other code) in the main window has crashed.');
		console.log('This is a serious issue that needs to be handled and/or debugged.');
	});

	mainWindow.on('unresponsive', () => {
		console.log('Your Ember app (or other code) has made the window unresponsive.');
	});

	mainWindow.on('responsive', () => {
		console.log('The main window has become responsive again.');
	});

	mainWindow.on('closed', () => {
		mainWindow = null;
	});

	authWindow.on('closed', () => {
		authWindow = null;
	});
  
	//setTimeout(() => mainWindow.loadURL('http://localhost:5090/oauth2/auth'), 5000);
});

// Handle an unhandled error in the main thread
//
// Note that 'uncaughtException' is a crude mechanism for exception handling intended to
// be used only as a last resort. The event should not be used as an equivalent to
// "On Error Resume Next". Unhandled exceptions inherently mean that an application is in
// an undefined state. Attempting to resume application code without properly recovering
// from the exception can cause additional unforeseen and unpredictable issues.
//
// Attempting to resume normally after an uncaught exception can be similar to pulling out
// of the power cord when upgrading a computer -- nine out of ten times nothing happens -
// but the 10th time, the system becomes corrupted.
//
// The correct use of 'uncaughtException' is to perform synchronous cleanup of allocated
// resources (e.g. file descriptors, handles, etc) before shutting down the process. It is
// not safe to resume normal operation after 'uncaughtException'.
process.on('uncaughtException', (err) => {
	console.log('An exception in the main thread was not handled.');
	console.log('This is a serious issue that needs to be handled and/or debugged.');
	console.log(`Exception: ${err}`);
});

ipcMain.on('auth', (event, arg) => {
	authWindow = authWindow || createAuthWindow();
	authWindow.loadURL(`http://localhost:5090/oauth2/auth?orgtype=${arg.orgType}&orgname=${arg.orgName}`);
	authWindow.show();
});

ipcMain.on('auth-result', (event, arg) => {
	console.info('auth-result => ', arg);
	authWindow.destroy();
	mainWindow.webContents.send('auth-result', arg);
});

function createAuthWindow() {
	return new BrowserWindow({
		width: 600,
		height: 800,
		parent: mainWindow,
		modal: true,
		show: false
	});
}

[
  'home', 
  'appData', 
  'userData', 
  'temp', 
  'exe', 
  'module', 
  'desktop',
  'documents',
  'downloads',
  'music',
  'pictures',
  'videos'
].forEach(key => console.info(`app.getPath('${key}') => `, app.getPath(key)));