var finder = new Object();
var fs = require('fs');

finder.findFiles =async function(initialFolder, callback){
    const directoryPath = initialFolder//path.join(__dirname, 'Documents');
    //passsing directoryPath and callback function
    
    let fileList = [];
    await fs.readdir(directoryPath, callback(err, files))
    

    // let fileList = [];
    // fs.readdir(directoryPath, function (err, files) {
    //     //handling error
    //     if (err) {
    //         return console.log('Unable to scan directory: ' + err);
    //     } 
    //     //listing all files using forEach
    //     files.forEach((file, index, array) => {
    //         // Do whatever you want to do with the file
    //         //console.log(file); 
    //         fileList.push(file);
    //         //console.log('file-->'+array)
    //         //console.log('file-->'+index)

    //         if(fileList.length==array.length){
    //             //console.log('fileList.length ',fileList);
    //             console.log('fileList.length '+fileList.length);
    //             console.log('fileList.length '+array.length);
                
    //             return fileList;
    //         }

    //     });
    // });


}

module.exports = finder;