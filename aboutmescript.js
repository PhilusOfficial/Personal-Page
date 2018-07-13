function scroll() {
    $('html, body').animate({
        scrollTop: $("#navcontainer").offset().top
    }, 1000);
};

function hover() {
  $("#dropdownblock").removeClass("nodisplay")
  $("#dropdownblock").addClass("display")
  scroll();

}

function hide() {
  if($("#dropdownblock").hasClass("display"))
  $("#dropdownblock").removeClass("display")
  $("#dropdownblock").addClass("nodisplay")
}

function removeanimation() {
  $(".flag").removeClass("detailanimation")
}

$('#myskills').on('click', function(e) {
    e.stopPropagation();
});

$("#myskills").click(hover);
$(".flag").hover(removeanimation);
$(document).click(hide);

$("#arrow").click(function() {
    $('html, body').animate({
        scrollTop: $("#section1").offset().top
    }, 1000);
});
