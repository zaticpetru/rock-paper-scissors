const dialog = document.getElementById("rules-dialog");
const openButton = document.getElementById("open-rules-button");
const closeButton = document.getElementById("close-rules-button");

openButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});