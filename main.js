const { app, BrowserWindow } = require('electron')
var fs = require('fs')
const sound = require("sound-play");
const path = require('path');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    //createWindow()
    //console.log("SCHIZO TIME");
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
        fs.readdir('./resources/app/VOICES', function(err,files) {
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

function which_voice(num) {
    return new Promise((resolve,reject) => {
        resolve(Math.floor(Math.random() * num));
    })
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

// this function I AM IN SIDE YOUR WALLS TEAR YOUR SKIN OFF TO GET THE BUGS OUT
async function get_rid_of_your_meds() {
    cat = await HEAR_THE_VOICES();
    //console.log(cat);
    num = cat[0];
    list = cat[1];
    //console.log(num)
    while(true) {
        gen = await which_voice(num);
        selected_voice = list[gen];
        console.log(selected_voice);
        cur_path = app.getPath('exe');
        filepath = cur_path + 'resources/app/VOICES/' + selected_voice;
        //filepath = path.join(__dirname,"VOICES/") + selected_voice;
        sound.play(filepath);
        wait = await which_voice(10);
        wait *= 1000;
        hold = await sleep(wait);
    }    
}

function take_meds() {
    app.quit();
}

