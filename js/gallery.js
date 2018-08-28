window.onload = function(){
    localStorage.setItem('imagesToShow', '');
    setImageClasses();
};
function showCategory(categorySelected){
    var allImages = document.getElementsByTagName("img"),
        filterCategory = "data-" + categorySelected,
        allCategories = [],
        filterDiv = document.getElementsByClassName('filters');
    
    filterDiv[0].innerHTML = "";
    filterDiv[0].style.display = 'block';       
    
    for (var i=0; i<allImages.length; i++){
        var thisImageCategories = allImages[i].getAttribute(filterCategory);
        var thisImageCategoryArray = thisImageCategories.split(" ");
        
        for (var x=0; x<thisImageCategoryArray.length; x++){
            if (!allCategories.includes(thisImageCategoryArray[x])) { allCategories.push(thisImageCategoryArray[x]) }
        }
    }
    
    allCategories.sort();
    
    for (var n=0; n<allCategories.length; n++){
        var classForFilter = allCategories[n],
            textForFilter = classForFilter.replace(/([A-Z])/g, ' $1').trim(),
            specificFilter = document.createElement('label'),
            node = document.createTextNode(textForFilter),
            checkbox = document.createElement('input');
        
        checkbox.type = "checkbox";
        checkbox.value = classForFilter;
        checkbox.id = classForFilter;
        checkbox.addEventListener('click', updateFilters)
            
        specificFilter.htmlFor = classForFilter;
        specificFilter.appendChild(node);
        filterDiv[0].append(checkbox);
        filterDiv[0].appendChild(specificFilter);
        
        if (isSelected(classForFilter)) { checkbox.click(); }
    }
    
    var doneButton = document.createElement('button');
    doneButton.innerHTML = 'Done';
    filterDiv[0].appendChild(doneButton);
    
    doneButton.addEventListener('click', function(){
       filterDiv[0].style.display = 'none';                    
    });
}
function updateFilters(){
    var checkboxes = document.getElementsByTagName('input');
    
    localStorage.getItem('imagesToShow') == '' ? checkedArray = [] : checkedArray = localStorage.getItem('imagesToShow').split(',');
    
    for (i=0; i<checkboxes.length; i++){
        if (checkboxes[i].checked && !checkedArray.includes(checkboxes[i].id)) { 
            checkedArray.push( checkboxes[i].id ); 
        }else if (!checkboxes[i].checked && checkedArray.includes(checkboxes[i].id)) {
            var index = checkedArray.indexOf(checkboxes[i].id);
            checkedArray.splice(index, 1);
        }
    }
    
    localStorage.setItem('imagesToShow', checkedArray);
    hideOrShowImages();
}
function hideOrShowImages(){
    if(localStorage.getItem('imagesToShow') != ""){
        var ImagesToShow = localStorage.getItem('imagesToShow').split(','),
            allImages = document.getElementsByTagName("img");
        
        for (i=0; i<allImages.length; i++){
            var hasClass = false,
                thisImageClasses = allImages[i].classList;
            console.log(thisImageClasses);
            
            for(x=0; x<ImagesToShow.length; x++){
                console.log(ImagesToShow);
                if (thisImageClasses.contains(ImagesToShow[x])) { hasClass = true; }
            }
            
            hasClass ? allImages[i].style.display = 'inline' : allImages[i].style.display = 'none';
        }
    }else{
        allImages = document.getElementsByTagName("img");
        for (i=0; i<allImages.length; i++){
            allImages[i].style.display = 'inline'
        }            
    }
}
function isSelected(itemToCheck){
    var selectedItems = localStorage.getItem('imagesToShow').split(',');
    
    if(selectedItems.includes(itemToCheck)){
        return true
    }else{
        return false;
    }
}
function removeFilters(){
    localStorage.setItem('imagesToShow', '');
    hideOrShowImages();
}
function setImageClasses(){
    var allImages = document.getElementsByTagName("img");
    
    for (i=0; i<allImages.length; i++){
        var thisImageAnimalInformation = allImages[i].getAttribute('data-animals').split(' '),
            thisImageLocationInformation = allImages[i].getAttribute('data-locations').split(' ');
        
        for(x=0; x<thisImageAnimalInformation.length; x++){
            allImages[i].classList.add(thisImageAnimalInformation[x])
        }
        for(z=0; z<thisImageLocationInformation.length; z++){
            allImages[i].classList.add(thisImageLocationInformation[z])
        }        
    }
}
function openImage(imageToOpen){
    var imageToOpen = imageToOpen.replace('thumbs','full'),
        galleryImageWrap = document.getElementById('galleryFullImageDisplay'),
        overlayWrap = document.getElementsByClassName('overlayWrap');
    
    overlayWrap[0].style.display = 'block';
    galleryImageWrap.style.background = 'url(' + imageToOpen + ') no-repeat 50%';
    galleryImageWrap.style.backgroundSize = "contain";
}
function closeOverlay() {
    var overlayWrap = document.getElementsByClassName('overlayWrap');
    overlayWrap[0].style.display = 'none';
}