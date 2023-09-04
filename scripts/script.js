window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 70) {
    document.getElementById("hat-img-1").style.height = "4%";
  } else {
    document.getElementById("hat-img-1").style.height = "12%";
  }
}

