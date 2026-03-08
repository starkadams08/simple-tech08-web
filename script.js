function sendMessage() {
  const inputEl = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");

  if (!inputEl || !chatBox) return;

  const input = (inputEl.value || "").trim();
  if (!input) return;

  const normalized = input.toLowerCase();

  let response = "";

  if (normalized.includes("hours")) {
    response = "We are open from 8pm every day.";
  } else if (normalized.includes("location")) {
    response = "We are located in Kampala city center.";
  } else if (normalized.includes("services")) {
    response = "We repair phones, laptops, and install software.";
  } else {
    response = "Please contact us on WhatsApp for more details.";
  }

  const userP = document.createElement("p");
  const aiP = document.createElement("p");

  const userB = document.createElement("b");
  userB.textContent = "You: ";
  userP.appendChild(userB);
  userP.appendChild(document.createTextNode(input));

  const aiB = document.createElement("b");
  aiB.textContent = "AI: ";
  aiP.appendChild(aiB);
  aiP.appendChild(document.createTextNode(response));

  chatBox.appendChild(userP);
  chatBox.appendChild(aiP);

  inputEl.value = "";
  inputEl.focus();
}
