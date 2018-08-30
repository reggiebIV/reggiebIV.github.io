window.onload = function () { 
    setSeaDogDesign();    
}

window.onresize = function() {
    setSeaDogDesign();
}

function setSeaDogDesign() {
    var seaDogsColumns  = document.getElementsByClassName('seaDogsBlock1Column'),
        shortHeight     = 0,
        thisHeight      = 0;

    for ( i=0; i<seaDogsColumns.length; i++ ){
        imageElements   = seaDogsColumns[i].childNodes;
        thisHeight      = 0;

        for ( n=0; n<imageElements.length; n++ ){
            if (imageElements[n].offsetHeight) {
                thisHeight += imageElements[n].offsetHeight;
            }
        }

        if ( shortHeight == 0 ) { 
            shortHeight = thisHeight 
        } else if ( thisHeight < shortHeight ) {
            shortHeight = thisHeight
        }   
    }
    
    document.getElementById('seaDogsBlock1').style.height = shortHeight + 'px';
    
    var seaDogsColumns  = document.getElementsByClassName('seaDogsBlock3Column'),
        shortHeight     = 0,
        thisHeight      = 0;

    for ( i=0; i<seaDogsColumns.length; i++ ){
        imageElements   = seaDogsColumns[i].childNodes;
        thisHeight      = 0;

        for ( n=0; n<imageElements.length; n++ ){
            if (imageElements[n].offsetHeight) {
                thisHeight += imageElements[n].offsetHeight;
            }
        }

        if ( shortHeight == 0 ) { 
            shortHeight = thisHeight 
        } else if ( thisHeight < shortHeight ) {
            shortHeight = thisHeight
        }   
    }
    document.getElementById('seaDogsBlock3').style.height = shortHeight + 'px';
}