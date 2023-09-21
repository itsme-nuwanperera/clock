const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  // Create a window
  let win = new BrowserWindow({
    width: 500,
    height: 600,
    resizable: true,
    icon: path.join(__dirname, "favicon.ico"),
    autoHideMenuBar: true,
  });

  // load HTML file from our dir
  win.loadFile(path.join(__dirname, "index.html"));

  // open devtools
  // win.webContents.openDevTools();

  // when window is closed
  win.on("closed", () => {
    win = null;
  });
}

// run createWindow func

app.on("ready", createWindow);

// quit when all windows closed
app.on("window-all-closed", () => {
  //  check if not drawing platform (mac)
  if (process.platform !== "darwin") {
    app.quit();
  }
});
