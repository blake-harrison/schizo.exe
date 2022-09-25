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
    //createWindow()
    console.log("SCHIZO TIME");
    get_rid_of_your_meds();

    app.on('activate',() => {
        if(BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})
// kill her kill her kill her kill her kill her kill her kill her kill her kill her 
app.on('window-all-closed', () => {
    if(process.platform!=='darwin') app.quit()
})

function HEAR_THE_VOICES() {
    return new Promise((resolve,reject) => {
        file_list = [];
        num = 0;
        fs.readdir('./VOICES', function(err,files) {
            if(err) {
                return console.log('Unable to scan directory: ', err);
            }
            files.forEach(function(file) {
                //console.log("\nFile: ",file);
                file_list.push(file);
                num += 1;
            });
            resolve([num,file_list]);
        });
    });

}

// this function I AM IN SIDE YOUR WALLS TEAR YOUR SKIN OFF TO GET THE BUGS OUT
async function get_rid_of_your_meds() {
    cat = await HEAR_THE_VOICES();
    //console.log(list);
    num = cat[0];
    list = cat[1];
    console.log(Math.random())
}

function take_meds() {
    app.quit();
}