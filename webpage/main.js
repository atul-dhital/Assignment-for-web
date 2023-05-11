$(document).ready(function() {
  var slider = $(".blog__slide-wrapper");
  var dot1 = $("#bl");
  var dot2 = $("#bl2");
  var prevBtn = $("#prev");
  var nextBtn = $("#nxt");

  slider.slick({
      customPaging: function(slider, i) {
          return '<button class="slick-number">' + (i + 1) + "</button>";
      },
      dots: false,
      infinite: false,
      adaptiveHeight: true,
      arrows: false,
  });

  dot1.on("click", function() {
      slider.slick("slickGoTo", 0);
  });

  dot2.on("click", function() {
      slider.slick("slickGoTo", 1);
  });

  prevBtn.on("click", function() {
      slider.slick("slickPrev");
  });

  nextBtn.on("click", function() {
      slider.slick("slickNext");
  });
});


        function menuOnClick() {
          document.getElementById("menu-bar").classList.toggle("change");
          document.getElementById("nav").classList.toggle("change");
          document.getElementById("menu-bg").classList.toggle("change-bg");
        }