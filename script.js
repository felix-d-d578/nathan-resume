$(document).ready(function(){
    var bottom=$("header").outerHeight();
    var header=$("header").offset().top + bottom;
 $(window).scroll(function(){
    
     if($(window).width()>991){
     if($(window).scrollTop()>=header){
         $("header").addClass("sticky")
     }
     else{
      $("header").removeClass("sticky")	
     }
 }
 })



 $(".navbar ul li a").click(function(){
      $(".navbar ul li a").removeClass("active")
      $(this).addClass("active");
 })

$(".ham-burger").click(function(){
    $(this).toggleClass("active")
    $(".navbar").toggleClass("open");
})

})




 // AOS Instance
    AOS.init();