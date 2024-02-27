function highlightLongWords() {
  // Get the paragraph element
  const paragraph = document.getElementById("paragraph");

  // Split the text into an array of words
  const words = paragraph.textContent.split(/\s+/);

  console.log(words);

  // Iterate through the words
  for (let i = 0; i < words.length; i++) {
    // Check if the word has more than 8 characters
    if (words[i].length > 8) {
      // Create a span element for the highlighted word
      const span = document.createElement("span");
      span.textContent = words[i];
    
      span.style.backgroundColor = "yellow";

      // Replace the original word with the highlighted span
      words[i] = span.outerHTML;
    }
  }

  // Join the words back into a string and set it as the content of the paragraph
  paragraph.innerHTML = words.join(" ");
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", highlightLongWords);
