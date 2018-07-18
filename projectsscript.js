function scale() {
  $(this).addClass("center")
  $("#cover").addClass("depth")
  $("body").addClass("stopscroll")
  $(".video").removeClass("use")
}

function goback() {
  $(".video").removeClass("center")
  $("#cover").removeClass("depth")
  $("body").removeClass("stopscroll")
  $(".video").addClass("use")
}

$(".video").click(scale)
$("#cover").click(goback)


function onReady(callback) {
  var intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 1000);
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function() {
  setVisible('.page', true);
  setVisible('#loading', false);
});
