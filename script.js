const img =['img/img (1).jpg',
    'img/img (2).jpg',
    'img/img (3).jpg',
    'img/img (4).jpg'];
let imgIndex = 0 ;
function Left(){
    
    if(imgIndex == 0){
        imgIndex = img.length -1;
    }
    else{
        imgIndex-- ;
    }
const imgElement = document.getElementById("mainImg")
 imgElement.src = img[imgIndex];
}
function Right(){
    if(imgIndex == img.length -1){
        imgIndex = 0 ;
    }
    else{
        imgIndex++ ;
    }
const imgElement = document.getElementById("mainImg")
 imgElement.src = img[imgIndex];
 }
 setInterval(Right,2000)