var APP = APP || {};

APP.circles = {
  all: document.querySelectorAll('.circle'),
  small: document.querySelectorAll('.circle-small')[0],
  medium: document.querySelectorAll('.circle-medium')[0],
  large: document.querySelectorAll('.circle-lrg')[0],
}

APP.copy = document.querySelectorAll('.copy');
APP.expandDot = function(cxt){
  if (!cxt.classList.contains('active')) {
    cxt.classList.add('active');
    if (cxt.classList.contains("circle-small")) {
      for (text of APP.copy) {
        if(text.dataset.target === "circle-small") {
          text.classList.add('active');
        }
      };
    } else if(cxt.classList.contains("circle-medium")) {
      for (text of APP.copy) {
        if(text.dataset.target === "circle-medium") {
          text.classList.add('active');
        }
      };

    } else if(cxt.classList.contains("circle-lrg")) {
      for (text of APP.copy) {
        if(text.dataset.target === "circle-lrg") {
          text.classList.add('active');
        }
      };

    }
  } else {

    for (text of APP.copy) {
      text.classList.remove('active');
    };

    cxt.classList.remove('active');
  }
}

for (dots of APP.circles.all) {
  dots.addEventListener("click", function(){
    var that = this;
    APP.expandDot(that);
  })

  };
