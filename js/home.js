$(document).ready(function () {
  $("#searchIcon").click(function () {
    $("#searchInput").toggleClass("search");
    $("#searchInput").toggleClass("inputSearchActive");
  });

  var swiper = new Swiper(".mySwiper", {
    effect:"flip",
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });


  function loder(){
    $(".loder").css("display","none");
  }

  function fadeOut(){
    setInterval(loder,2000);
  }

  window.onload = fadeOut();

});
