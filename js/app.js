var flag=true;
function box_call($box_number) {
   if(flag) {
      span_transformY($box_number);
      flag=false;
   }
}
const boxes = {
   box1:{
      i:"0",
      array_index:"0",
      transformY:"translate(0%, 0%)",
      strings:["tekst 1", "tekst 2", "tekst 3"],
      box:".box:first-child",
   },
   box2:{
      i:"0",
      array_index:"0",
      transformY:"translate(0%, 0%)",
      strings:["tekst 4", "tekst 5", "tekst 6"],
      box:".box:eq(1)",
   },
   box3:{
      i:"0",
      array_index:"0",
      transformY:"translate(0%, 0%)",
      strings:["tekst 7", "tekst 8", "tekst 9"],
      box:".box:eq(2)",
   }
}

function span_transformY($box_number) {
   for (let key of Object.keys(boxes)) {
      if(key == "box"+$box_number) {
         boxes[key].transformY = "translate(0%, -"+(boxes[key].i*100)+"%)";
         $(boxes[key].box+"> .box-description").append("<span></span>");
         $(boxes[key].box+"> .box-description > span:eq("+boxes[key].i+")").text(boxes[key].strings[boxes[key].array_index]);
         $(boxes[key].box+"> .box-description > span").css({
            "transform":boxes[key].transformY,
            "transition":"0.8s",
            "transition-delay":"0.5s"
         });   

         boxes[key].i++;
         boxes[key].array_index++;
         if (boxes[key].array_index==3) {boxes[key].array_index=0;}
      }
   }
}

var box_animation_scroll;
function box_animation() {
   box_animation_scroll = setTimeout(function() {
      if($(".box:first-child").is(":hover")) {box_call(1);flag=true;}
      else if($(".box:eq(1)").is(":hover")) {box_call(2);flag=true;}
      else if($(".box:eq(2)").is(":hover")) {box_call(3);flag=true;}
      else {
         clearTimeout(box_animation_scroll);
         flag = false;
      }

      box_animation();
   }, 1500);
}


$(".box").hover(function() {
   if($(".box:first-child").is(":hover")) {box_call(1);}
   else if($(".box:eq(1)").is(":hover")) {box_call(2);}
   else if($(".box:eq(2)").is(":hover")) {box_call(3);}
   flag = true;
   setTimeout(function() {
      if(boxes["box1"].i == 1 && $(".box:first-child").is(":hover")) {box_call(1);}
      if(boxes["box2"].i == 1 && $(".box:eq(1)").is(":hover")) {box_call(2);}
      if(boxes["box3"].i == 1 && $(".box:eq(2)").is(":hover")) {box_call(3);}
      flag = true;
      
      clearTimeout(box_animation_scroll);
      box_animation();
   }, 400);
}, function() {clearTimeout(box_animation_scroll);});


// box1
$(".box:first-child").hover(function() {
   $(".box:eq(1), .box:eq(2)").css({
      "transform":"translate(250%)",
      "transition":"0.8s"
   });
   $(".box:first-child > .box-description").css({"width":"66.6666%"});
   $(".box:nth-child(2) > .box-title > span").css({"color":"black"});

}, function() {
   $(".box:eq(1), .box:eq(2)").css("transform","translate(0%)");
   $(".box:nth-child(2) > .box-title > span").css({"color":"rgb(244, 67, 54)"});
});


// box2
$(".box:eq(1)").hover(function() {
   $(".box:eq(1)").css({
      "transform":"translate(-100%)",
      "transition":"0.5s"
   });
   $(".box:eq(1) > .box-description").css({
      "left":"100%",
      "width":"200%"
   });
   $(".box:eq(2)").css("transform","translate(100%)");
   
}, function() {
   $(".box:eq(1)").css({
      "transform":"translate(0%)",
      "transition":"0.5s"
   });
   $(".box:eq(1) > .box-description").css({"left":"100%"});
   $(".box:eq(2)").css("transform","translate(0%)");
});


//box 3
$(".box:eq(2)").hover(function() {
   $(".box:eq(2)").css({
      "transform":"translate(-200%)",
      "transition":"0.5s"
   });
   $(".box:eq(2) > .box-description").css({
      "left":"100%",
      "width":"200%"
   });
   $(".box:nth-child(2) > .box-title > span").css({"color":"black"});
   
}, function() {
   $(".box:eq(2)").css({
      "transform":"translate(0%)",
      "transition":"0.5s"
   });
   $(".box:eq(2) > .box-description").css({"left":"100%"});
   $(".box:nth-child(2) > .box-title > span").css({"color":"rgb(244, 67, 54)"});
});