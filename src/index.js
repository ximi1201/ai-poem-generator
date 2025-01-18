function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poetry", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instruction");
  let apiKey = "b0af3ae16bb5t0d34c6o8137296984ee";
  let context =
    "You are a poet expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML format. Example: <p>this is poem</p>. Make sure to follow the user instructions. Sign the poem with 'SheCodes AI' in bold";
  let prompt = `User instructions: Generate a french poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemForm = document.querySelector("#poetry");
  poemForm.classList.remove("hidden");
  poemForm.innerHTML = `<div class="generating"> ....Processing creative flow about ${instructionsInput.value}<div />`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemElement = document.querySelector("#poem-generator-form");
poemElement.addEventListener("submit", generatePoem);
