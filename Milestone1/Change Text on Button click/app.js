const btn = document.querySelector("#btn");
let heading = document.querySelector("h1");


const toggle = () => {
  if (heading.innerText === "The most affordable learning platform.") {
    heading.innerText = "PW Skills";
  } else {
    heading.innerText ="The most affordable learning platform.";
  }
};

btn.addEventListener("click", toggle);
