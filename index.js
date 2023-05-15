const hash = window.location.hash;

const message = atob(hash.slice(1));

if (message) {
  // show the message
  document.querySelector("#message-show").classList.remove("hide");
  document.querySelector("h1").textContent = message;

  // hide the message form
  document.querySelector("#message-form").classList.add("hide");
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const input = document.querySelector("input");

  const linkInput = document.querySelector("#link-input");
  const encrypted = btoa(input.value);

  document.querySelector("#message-link").classList.remove("hide");
  document.querySelector("#message-form").classList.add("hide");

  // get the encrypted hash message with url  to the linkinput value
  linkInput.value = `${window.location}#${encrypted}`;
  //selet the link input
  linkInput.focus();
  linkInput.select();
});
