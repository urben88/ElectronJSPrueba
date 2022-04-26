//!Tutorial-->  https://www.youtube.com/watch?v=0BWzZ6c8z-g&t=1814s

const { app, BrowserWindow,Menu} = require('electron');
const url = require('url');
const path = require('path');


let mainWindow;
let newProductWindow;

if(process.env.NODE_ENV !== 'produccion'){
    require('electron-reload')(__dirname,{
        electron: path.join(__dirname,'../node_modules','.bin','electron')
    })
}
app.on('ready',()=>{
    mainWindow = new BrowserWindow({})

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname,'views/index.html'),
        protocol:'file',
        slashes:true
    }))


    const mainMenu = Menu.buildFromTemplate(templateMenu)
    Menu.setApplicationMenu(mainMenu)

})
const templateMenu = [
    {
       label:'File',
       submenu:[
        {
            label:'New Product',
            accelerator:'Ctrl+N',
            click() {
                createNewProductWindow();
            }
        }
       ]
    }
   
]
function createNewProductWindow(){
    newProductWindow = new BrowserWindow({
        width:400,
        height:330,
        title:'Add a new Product'
    })
    newProductWindow.loadURL(url.format({
        pathname: path.join(__dirname,'views/new-product.html'),
        protocol:'file',
        slashes:true
    }))
}