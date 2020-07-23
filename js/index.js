$(document).ready(function(){
  /*buttons on header*/
$(".js--show-more").click(function (){
  $("html,body").animate({scrollTop:$(".js--section-tools").offset().top},1000)
})



/*animations on scroll*/


$(".js--wp-1").waypoint(function (direction){
  $(".js--wp-1").addClass("animate__animated  animate__fadeInUp");
},{
  offset:"75%;"
});


$(".js--wp-2").waypoint(function (direction){
  $(".js--wp-2").addClass("animate__animated animate__fadeInUp");
},{
  offset:"70%;"
}
);
$(".js--wp-3").waypoint(function (direction){
  $(".js--wp-3").addClass("animate__animated  animate__fadeIn");
},{
  offset:"60%;"
});


});
