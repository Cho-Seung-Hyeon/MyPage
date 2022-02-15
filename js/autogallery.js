var current = 0;  
showSlides();  

function showSlides() {
  var slides = document.querySelectorAll("#gallerybox1 > img");  
  for (let i = 0; i < slides.length; i++) {
  }
    slides[i].style.display = "none";  
  current++; 
  if(current > slides.length)  
    current = 1; 
  setTimeout(showSlides, 2000);   
}