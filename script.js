const animais_Possiveis = ["Girafa", "Flamingo", "Joaninha"]
const cores_Possiveis = ["Amarelo", "Rosa", "Vermelho"]

let indice_Animal = 0
let indice_Cores = 0 

function trocarAnimal(){
  indice_Animal = (indice_Animal + 1) % animais_Possiveis.length
  document.getElementById("animal").value = animais_Possiveis[indice_Animal]
}

function trocarCores(){
    indice_Cores = (indice_Cores + 1) % cores_Possiveis.length
    document.getElementById("cor").value = cores_Possiveis[indice_Cores]
}

function verificadorCasos(){
const animais_Possiveis = document.getElementById("animal").value
const cores_Possiveis =  document.getElementById("cor").value

if(animais_Possiveis === "Girafa" && cores_Possiveis === "Amarelo"){
    alert("Muito bem a girafa é amarela! Eu acho...")
} else if(animais_Possiveis === "Flamingo" && cores_Possiveis === "Rosa"){
    alert("Sim, o flamingo é rosa. Tá certo")
} else if(animais_Possiveis === "Joaninha" && cores_Possiveis === "Vermelho"){
    alert("Aeeee a ladybug é red!")
} else {
    alert("Inútil, não sabe nem as cores do bicho. TENTE DE NOVO!")
}
}