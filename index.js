// Your code goes here
// Listen for the DOMContentLoaded event before running the code
document.addEventListener("DOMContentLoaded", function() {
    // Once the DOM is loaded, find the paragraph element by its id
    var textElement = document.getElementById("text");
    // Change the text content of the paragraph to "This is really cool!"
    textElement.textContent = "This is really cool!";
  });
  
  // This console.log will fire immediately when index.js is loaded, showing that
  // the script has loaded but hasn't waited for the DOM to be fully ready
  console.log("This console.log fires when index.js loads - before DOMContentLoaded is triggered");
  