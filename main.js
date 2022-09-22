const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate',() => {
        if(BrowserWindow.getAllWindows().length === 0) createWindow()
        HEAR_THE_VOICES()
    })
})

app.on('window-all-closed', () => {
    if(process.platform!=='darwin') app.quit()
})

function HEAR_THE_VOICES() {

}