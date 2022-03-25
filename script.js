$(document).ready(function(){

  var animals = [
    "images/1.jpg",
    "https://www.feednavigator.com/var/wrbm_gb_food_pharma/storage/images/publications/feed/feednavigator.com/article/2019/04/01/enzymes-and-feed-efficiency-in-pigs/9320883-8-eng-GB/Enzymes-and-feed-efficiency-in-pigs.jpg",
    "https://ichef.bbci.co.uk/news/976/cpsprodpb/2F75/production/_100894121_cubone.jpg",
                  ]


  $(".imgs").each(function(){
    $(this).css({
      "background-image" : "url(" + animals[Math.floor(Math.random() * animals.length)] + ")",
    });
  });


});
