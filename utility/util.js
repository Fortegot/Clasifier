var util = new Object();

util.getFolderName = function(dateTime){
     
    let month = fileCreatedDate.getMonth()+1;
    if(month<10){
        month = '0'+month;
    }

    let folderName = 'f'+fileCreatedDate.getFullYear()+'_'+month;

    return folderName;
}

module.exports = util;
