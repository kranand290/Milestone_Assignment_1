document.addEventListener("DOMContentLoaded", function () {
  // Pre-existing array of list items
  const courseItemsArray = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

  // Function to add course items
  function addCourseItem() {
    const courseList = document.getElementById("courseItems");
    const nextItemIndex = courseList.children.length; // Get the index of the next item to add

    if (nextItemIndex < courseItemsArray.length) {
      const newItem = document.createElement("li");
      newItem.textContent = courseItemsArray[nextItemIndex];
      courseList.appendChild(newItem);
    } else {
      alert("All items have been added!");
    }
  }

  // Event listener for button click
  const addItemBtn = document.getElementById("addItemBtn");
  addItemBtn.addEventListener("click", addCourseItem);
});
