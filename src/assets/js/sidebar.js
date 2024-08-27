const basicDetails = document.getElementById("basic-details");
const advancedDetails = document.getElementById("advanced-details");

function adjustHeight() {
  let screen_width = window.innerWidth;

  if (screen_width < 1100) {
    basicDetails.removeAttribute("open");
    advancedDetails.removeAttribute("open");
  } else if (screen_width >= 1100) {
    basicDetails.setAttribute("open", "");
    advancedDetails.setAttribute("open", "");
  }
}

// window.addEventListener("resize", adjustHeight);
adjustHeight();
