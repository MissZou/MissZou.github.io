// for browser
function getImg(url) {
    var img = new Image();
    img.src = url;
    return img;
};


function getData(json) {
    return new Promise(function(resolve) {
        $.getJSON(json, function(data) {
            resolve(data);
        });
    });
};


