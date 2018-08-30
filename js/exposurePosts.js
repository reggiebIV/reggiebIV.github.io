window.onload = function () { 
    setWrapHeight();    
}

window.onresize = function() {
    setWrapHeight();  
}

function setWrapHeight() {
    var fullheight  = document.body.offsetHeight,
        headHeight  = document.getElementsByClassName('menuWrap')[0].offsetHeight,
        bodyHeight  = fullheight - headHeight -1;
    
    document.getElementsByClassName('exposure-post-embed')[0].style.height = bodyHeight;
}