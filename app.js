//light and dark theme
// Select the button
const btn = document.querySelector(".btn-toggle");
// Select the stylesheet <link>
const theme = document.querySelector("#theme-link");

// Listen for a click on the button
btn.addEventListener("click", function() {
  // If the current URL contains "ligh-theme.css"
  if (theme.getAttribute("href") == "light-theme.css") {
    // ... then switch it to "dark-theme.css"
    theme.href = "dark-theme.css";
  // Otherwise...
  } else {
    // ... switch it to "light-theme.css"
    theme.href = "light-theme.css";
  }
});


const icon = document.querySelector("#moon");


btn.addEventListener("click", function() {
  if (icon.getAttribute("src") == "https://i.ibb.co/RCrSZ3G/icon-sun.png") {
    icon.src = "https://i.ibb.co/WVh9Xsx/icon-moon.png";
  }
   else if (icon.getAttribute("src") == "https://i.ibb.co/WVh9Xsx/icon-moon.png")
  {
    icon.src = "https://i.ibb.co/RCrSZ3G/icon-sun.png";
  }
});




