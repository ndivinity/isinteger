const METADATA = {
    Version: "0.69.2"
};

function isInteger(int) {
    if(int == undefined || int == null) {
        return true;
    } else if(int == 0 || int == '0') {
        return true;
    }
    else {
        return false;
    }
}


module.exports = {
    METADATA,
    isInteger
};