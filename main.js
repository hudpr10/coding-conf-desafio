import inputButtonsShow from "./js/inputButtonsShow.js";
import "./styles/focusInput.js";

const inputUpload = document.querySelector("#image");
let imgSended = "";

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
});
