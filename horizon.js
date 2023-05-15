function addHorizontalLine() {
    // Create the line element
    var line = document.createElement("div");
    line.style.height = "5px";
    line.style.width = "100%";
    line.style.backgroundColor = "red";
    line.style.position = "fixed";
    line.style.zIndex = "9999";

   // Add the line to the body
   document.body.appendChild(line);

  // Update line position on scroll
  function updateLinePosition() {
    var windowHeight = window.innerHeight;
    var lastVisibleElement = getLastVisibleElement();
    if (lastVisibleElement) {
        var elementRect = lastVisibleElement.getBoundingClientRect();
        var elementBottom = elementRect.top + elementRect.height;
        var lineTop = windowHeight - elementBottom;
        line.style.top = lineTop + "px";
    }
  }

  function getLastVisibleElement() {
    var elements = document.body.getElementsByTagName("*");
    for (var i = elements.length - 1; i >= 0; i--) {
      var rect = elements[i].getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < windowHeight) {
        return elements[i];
      }
    }
    return null;
  }
 
   window.addEventListener("scroll", updateLinePosition);
   window.addEventListener("resize", updateLinePosition);
 
   // Call the function initially
   updateLinePosition();
 }

// Call the function to add the horizontal line
addHorizontalLine();
