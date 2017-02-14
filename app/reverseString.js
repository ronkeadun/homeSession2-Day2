'use strict'
const check = {
reverseString : function (str) {
    str.trim(); 
    if(str === ""){ 
        return null;
    }
    var rev =str.split('').reverse().join('');
    if(rev.trim() === str){
        return true;
    }
    
    return rev;
}
}
module.exports = check;