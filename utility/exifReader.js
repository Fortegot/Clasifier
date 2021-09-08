var reader = new Object();
const ExifImage = require('exif').ExifImage;
var fs = require('fs');

reader.readMetadata = function(originPath, fileName, destinationFolder){
    let imageToRead = originPath+'/'+fileName;
    console.log(imageToRead);
    try {
        new ExifImage({ image : imageToRead }, function (error, exifData) {
            if (error)
                console.log('Error: '+error.message);
            else{
                
                //console.log(exifData); // Do something with your data!
                let createdDate = exifData.exif.CreateDate;
                //console.log(createdDate);
                let datePart = createdDate.split(' ');
                //console.log('datePart..> '+imageToRead+datePart[0]);

                let datePartList = datePart[0].split(':');
                let folderName =destinationFolder+'/f'+datePartList[0]+'_'+datePartList[1];
                console.log('destinationFolder' +folderName);

                if (!fs.existsSync(folderName)){
                    fs.mkdirSync(folderName);
                }
                let destinationPath = folderName+'/'+fileName;
                fs.rename(imageToRead, destinationPath, function(err, result){
                    console.log('err--> ', err);
                    console.log('result--> ', result);
                })
            }
        });
    } catch (error) {
        console.log('Error: ' + error.message);
    }

    return null;

}

module.exports = reader;