console.log('aaaa');

var fs = require('fs');
var path = require('path');
const util = require('./utility/util');

var dir = './tmp';

var pathToImages = 'E:/fotos/exportMovil04092021/Media/WhatsApp Images/Sent';


if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);

}



async function initProcess(){
    await findFiles(pathToImages);

    
}


function findFiles(directoryPath){
    
    fs.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        let fileList = [];
        //listing all files using forEach
        files.forEach((file, index, array) => {
            // Do whatever you want to do with the file
            //console.log(file); 
            fileList.push(file);
            //console.log('file-->'+array)
            //console.log('file-->'+index)

            if(fileList.length==array.length){
                //console.log('fileList.length ',fileList);
                console.log('fileList.length '+fileList.length);
                console.log('fileList.length '+array.length);
                getFileCreatedDate(directoryPath, fileList);
                
            }

        });
    });
}

function getFileCreatedDate(directoryPath, fileList){
    for(let i=0; i<fileList.length;i++){
        //for(let i=0; i<10;i++){
        let fileName = directoryPath+'/'+fileList[i]
        let fileInfo = fs.statSync(fileName);
    
        //console.log(fileInfo);
        let fileExtension = path.extname(fileName);
        //console.log('extension--->' +fileExtension)
        if(fileExtension != undefined && fileExtension != ''){
            let fileCreatedDate= new Date(fileInfo.mtime);
            let folderName = util.getFileCreatedDate(fileCreatedDate);

            let destinyPath =directoryPath+'/'+folderName;
            console.log('destinationFolder' +destinyPath);

            if (!fs.existsSync(destinyPath)){
                fs.mkdirSync(destinyPath);
            }
            let newName = destinyPath+'/'+fileList[i];
            console.log('newName--> '+newName);
            console.log('fileName--> '+fileName);
            fs.rename(fileName, newName, function(err, result){
                console.log('err--> ', err);
                console.log('result--> ', result);
            })
        }
        
    }

}

initProcess();


 
