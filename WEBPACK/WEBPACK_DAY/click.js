// click
function handleclick() {
  const element = document.createElement("div")
  element.innerHTML = "welcome to webpack4.x"
  document.body.appendChild(element)
}
module.exports = handleclick