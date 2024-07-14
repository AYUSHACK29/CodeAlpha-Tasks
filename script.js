// For displaying the preview image by hovering over it
function upDate(previewPic){
    var imgelement=document.getElementById("image");
    imgelement.style.backgroundImage="url('" + previewPic.src+ "')";
   document.getElementById("image").innerHTML=previewPic.alt;
    
       }

// For displaying the default text when the mouse leaves the preview image
function unDo(){
  document.getElementById("image").style.backgroundImage="none";
  document.getElementById("image").innerHTML="Hover over an image below to display here."
       }