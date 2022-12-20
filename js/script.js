function scroll ( ) {
  if (document.documentElement.scrollTop > 200){
    document.getElementById("navbar").classList.add("scrolled");
  } else {
    document.getElementById("navbar").classList.remove("scrolled")
  }
}
   
window.onscroll = function (){
  scroll();
}