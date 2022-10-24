const colorInput = document.getElementById("color-input")
const btn = document.getElementById("btn")
const scheme = document.getElementById("schemes")
const colorContainer = document.getElementById("color-container")
const hexFooter = document.getElementById("hex-footer")

let currentColor = ""
let currentScheme = ""
let colorsArr = []
let hexArr = []

btn.addEventListener("click", function(){
  currentColor = colorInput.value
  currentScheme = scheme.value

fetch(`https://www.thecolorapi.com/scheme?hex=${currentColor.slice(1)}&mode=${currentScheme}&count=5`)
    .then(res => res.json())
    .then(function(data) {
   
    for (let i = 0; i < data.colors.length; i++ ){
        hexArr += `<p class="hex-desc">${data.colors[i].hex.value}</p>`
        colorsArr += `<div style="background-color:${data.colors[i].hex.value}" class="color-stripe"></div>`
    }
      colorContainer.innerHTML = colorsArr
      hexFooter.innerHTML = hexArr
      hexArr = []
      colorsArr = []
} )
})



