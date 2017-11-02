// PORTFOLIO PAGE 
// GALERY 1 
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var x = document.getElementsByClassName("galery1");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (var i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

// GALERY 2
var slideIndex_02 = 1;
showDivs_02(slideIndex_02);

function plusDivs_02(n) {
  showDivs_02(slideIndex_02 += n);
}

function showDivs_02(n) {
  var x = document.getElementsByClassName("galery2");
  if (n > x.length) {slideIndex_02 = 1}    
  if (n < 1) {slideIndex_02 = x.length}
  for (var i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex_02-1].style.display = "block";  
}

// GALERY 3
var slideIndex_03 = 1;
showDivs_03(slideIndex_03);

function plusDivs_03(n) {
  showDivs_03(slideIndex_03 += n);
}

function showDivs_03(n) {
  var x = document.getElementsByClassName("galery3");
  if (n > x.length) {slideIndex_03 = 1}    
  if (n < 1) {slideIndex_03 = x.length}
  for (var i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex_03-1].style.display = "block";  
}