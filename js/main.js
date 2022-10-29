$('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
    
  });

let bar = document.getElementById("g");
let gambur = document.getElementById("gambur");
let isValid = false;
function f() {
  isValid = !isValid;

  if(isValid){
    bar.style.display="block"
    gambur.classList.remove("fa-bars");
    gambur.classList.add("fa-x");
  }else{
    bar.style.display="none";
    gambur.classList.remove("fa-x");
    gambur.classList.add("fa-bars");
  }

}