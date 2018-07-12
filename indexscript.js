$("#arrow").click(function() {
    $('html, body').animate({
        scrollTop: $("#section1").offset().top
    }, 1000);
});

function zoom() {
  $(this).removeClass("backgroundanimationback")
  $(this).addClass("backgroundanimation");
}

function goback() {
  $(this).addClass("backgroundanimationback")
  $(this).removeClass("backgroundanimation");
}

function animatearrow() {
  $("#arrow").removeClass("arrowscalingback")
  $("#arrow").removeClass("arrowanimation")
  $("#arrow").addClass("arrowscaling")
}

function stoparrow() {
  $("#arrow").removeClass("arrowscaling")
  $("#arrow").addClass("arrowscalingback")
}

$(".preanimation").mouseover(zoom);
$(".preanimation").mouseleave(goback);

$("#arrow").mouseover(animatearrow);
$("#arrow").mouseleave(stoparrow);

/*----------------------------------------------------------------------*/

function addspinner1() {$("#polilogo").addClass("logospinner")}
function removespinner1() {$("#polilogo").removeClass("logospinner")}

$("#section1").mouseover(addspinner1);
$("#section1").mouseleave(removespinner1);

/*----------------------------------------------------------------------*/

function addspinner2() {$("#mkwiilogo").addClass("logospinner")}
function removespinner2() {$("#mkwiilogo").removeClass("logospinner")}

$("#section2").mouseover(addspinner2);
$("#section2").mouseleave(removespinner2);

/*----------------------------------------------------------------------*/

function addspinner3() {$("#cameralogo").addClass("logospinner")}
function removespinner3() {$("#cameralogo").removeClass("logospinner")}

$("#section3").mouseover(addspinner3);
$("#section3").mouseleave(removespinner3);

/*----------------------------------------------------------------------*/

function addspinner4() {$("#youtubelogo").addClass("logospinner")}
function removespinner4() {$("#youtubelogo").removeClass("logospinner")}

$("#section4").mouseover(addspinner4);
$("#section4").mouseleave(removespinner4);

/*----------------------------------------------------------------------*/

function addspinner5() {$("#magiclogo").addClass("logospinner")}
function removespinner5() {$("#magiclogo").removeClass("logospinner")}

$("#section5").mouseover(addspinner5);
$("#section5").mouseleave(removespinner5);
