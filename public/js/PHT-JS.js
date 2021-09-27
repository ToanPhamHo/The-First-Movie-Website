// JavaScript Document

var slideIndex = 0;
var slides = document.getElementsByClassName("pr");

showSlides();

function showSlides() 
{    
	var i;    
	for (i = 0; i < slides.length; i++) 
	{
		slides[i].style.display = "none"; 
	}
	slideIndex++;
	if (slideIndex> slides.length) 
	{
		slideIndex = 1
	} 
	slides[slideIndex-1].style.display = "block"; 
	setTimeout(showSlides, 4000);
}

function currentSlide(no) 
{
	var i;    
	for (i = 0; i < slides.length; i++) 
	{
		slides[i].style.display = "none"; 
	}
	slideIndex = no;
	slides[no-1].style.display = "block";
}

function plusSlides(n) 
{
  var newslideIndex = slideIndex + n;
  if(newslideIndex < 8 && newslideIndex > 0)
  {
	 currentSlide(newslideIndex);
  }
  else if (newslideIndex == 8){
	  currentSlide(1);
  }
  else if (newslideIndex == 0){
	  currentSlide(7);
  }
}
