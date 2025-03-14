import inputButtonsShow from "./inputButtonsShow.js";
import validInputs from "./validInputs.js";
import numberGenerator from "./numberGenerator.js"
import "../styles/focusInput.js";

let imgSended = "";

const inputUpload = document.querySelector("#image");
inputUpload.addEventListener("change", () => {
    // Captura o Arquivo
    const file = inputUpload.files[0];
    if (file) {
        // Utiliza o método FileReader para ler o arquivo de imagem
        const reader = new FileReader();
        reader.onload = function (e) {
            inputButtonsShow(true, e)
            imgSended = e.target.result;
        }
        reader.readAsDataURL(file);
    };
});

const removeButton = document.querySelector("#remove");
removeButton.addEventListener("click", (e) => {
    // Previne que abra o seletor de arquivos
    e.preventDefault();

    inputButtonsShow(false);

    // Reseta o input
    inputUpload.value = "";
    imgSended = "";
});

const testInputs = new validInputs;
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputGithub = document.querySelector("#githubUser");

const changePage = document.querySelector("#submitButton");
changePage.addEventListener("click", (e) => {
    e.preventDefault();

    // Testa todos os inputs
    const testImg = testInputs.validImage(imgSended);
    const testName = testInputs.validName(inputName.value);
    const testEmail = testInputs.validEmail(inputEmail.value);
    const testGithub = testInputs.validGithub(inputGithub.value);

    if(testImg && testName && testEmail && testGithub) {
        // Cria o objeto com os dados do formulário e o código aleatório
        const formData = {
            img: imgSended,
            name: inputName.value,
            email: inputEmail.value,
            githubUser: inputGithub.value,
            code: numberGenerator()
        };
        
        // Envia os dados para o localStorage do navegador
        localStorage.setItem("data", JSON.stringify(formData));

        // Muda para a página do ticket
        window.location.href = "/pages/ticket.html";
    }
})
