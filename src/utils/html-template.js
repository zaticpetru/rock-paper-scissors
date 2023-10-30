const htmlTemplate = (innerHTML) => {
  let template = document.createElement('template');
  template.innerHTML = innerHTML;
  return template.content.cloneNode(true)
}

export { htmlTemplate };