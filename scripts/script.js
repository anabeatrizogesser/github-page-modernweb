/* const é uma variável constante e let pode ser alterada, eu atribuo o valor 
e depois chamo essa variável */
let myImage = document.querySelector("img");

myImage.onclick = () => {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/ateliemetaum.jpeg"){
        myImage.setAttribute("src", "images/ateliemeta2.jpeg");
    }else{
        myImage.setAttribute("src", "images/ateliemetaum.jpeg");
    };
};

//mensagem de boas vindas personalizada
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Por favor, digite seu nome.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Bem Vinda ao Ateliê Metamorfose, ${myName}!`;
}

if(!localStorage.getItem("name")) {
    setUserName();
}else{
    let storedName = localStorage.getItem("name");
    myHeading.textContent = `Bem Vinda ao Ateliê Metamorfose, ${storedName}!`;
}   

myButton.onclick = () => {
    setUserName();
}