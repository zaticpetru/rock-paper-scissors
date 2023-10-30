const htmlTemplate = (innerHTML) => {
  let template = document.createElement('template');
  template.innerHTML = innerHTML;
  return template.content.cloneNode(true)
}

const hideElement = (element) => {
  if (!element) return;
  element.classList.add("opacity-0", "display-none");
}

const showElement = (element) => {
  if (!element) return;
  element.classList.remove("opacity-0", "display-none");
}


export { htmlTemplate, hideElement, showElement };