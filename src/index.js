function generatePoem(event) {
  event.preventDefault();

  let poemResults = document.querySelector("#poem");

  new Typewriter("#poem", {
    strings: "La tombe dit a la rose",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemElement = document.querySelector("#poem-generator-form");
poemElement.addEventListener("submit", generatePoem);
