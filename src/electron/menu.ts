import { app, BrowserWindow, Menu } from "electron";
import { ipcWebContentsSend, isDev } from "./util.js";

export function createMenu(mainWindow: BrowserWindow) {
  Menu.setApplicationMenu(
    Menu.buildFromTemplate([
      {
        label: process.platform === "darwin" ? undefined : "App",
        type: "submenu",
        submenu: [
          {
            label: "About",
            role: "about",
          },
          {
            type: "separator",
          },
          {
            label: "Quit",
            role: "quit",
            click: app.quit,
          },
          {
            label: "DevTools",
            click: () => mainWindow.webContents.openDevTools(),
            visible: isDev(),
          },
        ],
      },
      {
        label: "View",
        submenu: [
          {
            label: "CPU",
            click: () =>
              ipcWebContentsSend("changeView", mainWindow.webContents, "CPU"),
          },
          {
            label: "RAM",
            click: () =>
              ipcWebContentsSend("changeView", mainWindow.webContents, "RAM"),
          },
          {
            label: "Storage",
            click: () =>
              ipcWebContentsSend(
                "changeView",
                mainWindow.webContents,
                "STORAGE"
              ),
          },
          {
            label: "Reload",
            role: "reload",
          },
          {
            label: "Toggle Developer Tools",
            role: "toggleDevTools",
          },
        ],
      },
    ])
  );
}
