var blogPosts   = document.getElementsByClassName('story'),
    headWrap    = document.getElementById('HomePageHead'),
    vidOverlayH = document.getElementById('homeVidOverlay').offsetHeight;

headWrap.style.height = vidOverlayH;

for (i=0; i < blogPosts.length; i++){
    blogPosts[i].addEventListener('click', openStory);
}

function openStory(){
    var url                 = this.id;
    window.location.href    = window.location.href + url
}