const { app, BrowserWindow } = require('electron')
var fs = require('fs')

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
        console.log("starting app")
        get_rid_of_your_meds();
    })
})
// kill her kill her kill her kill her kill her kill her kill her kill her kill her 
app.on('window-all-closed', () => {
    if(process.platform!=='darwin') app.quit()
})

function HEAR_THE_VOICES() {
    return new Promise((resolve,reject) => {
        fs.readdir('./VOICES', function(err,files) {
            if(err) {
                return console.log('Unable to scan directory: ', err);
            }
            files.forEach(function(file) {
                console.log(file)
            })
        })
    })

}

// this function I AM IN SIDE YOUR WALLS TEAR YOUR SKIN OFF TO GET THE BUGS OUT
async function get_rid_of_your_meds() {
    await HEAR_THE_VOICES();
}

function take_meds() {
    app.quit();
}