/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"

document.addEventListener("DOMContentLoaded", function(){
    console.log("this is a website about me!");
});


/* 
Make the "Click me!" button move when the ++++visitor clicks it:
- First add the button to the page by following the "Next steps" in the README
*/
const btn = document.querySelector("button"); // Get the button from the page
// Detect clicks on the button
if (btn) {
  btn.onclick = function() {
    console.log("the slay button has been pressed.");
    // The JS works in conjunction with the 'dipped' code in style.css
    let el = document.getElementById("slaybox");
    el.append("slay ")
    el.style.backgroundColor = "#306E06";
    el.style.color = "#96BE7C";
  };
}

// This is a single line JS comment
/*
This is a comment that can span multiple lines 
- use comments to make your own notes!
*/
