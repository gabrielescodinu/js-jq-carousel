var next = $(".next i");
var prev = $(".prev i");
var imageNext = $(".last");
var imagePrev = $(".active")


next.click(function(){
  imageNext.show();
  imagePrev.hide();
})

prev.click(function(){
  imagePrev.show();
  imageNext.hide();
})
