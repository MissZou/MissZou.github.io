// for browser
function getImg(url) {
        var img = new Image();
         img.src = url;
    var p = new Promise(function(resolve,reject){
        img.onload = function() {
        resolve();
    }
    img.onerror = function(err) {
        reject(err);
    }
    });

    return p;
};


function getData(json) {
    return new Promise(function(resolve) {
        $.getJSON(json, function(data) {
            resolve(data);
        });
    });
};


