const imgContainer = document.querySelector(".upload-icon");
const uploadText = document.querySelector(".upload-inside-text");
const buttons = document.querySelector(".buttons-inside-upload-container");

function inputButtonsShow(value, img = "") {
    if(value) {
        // Adiciona a Imagem de Perfil ao Input
        imgContainer.setAttribute("src", img.target.result);
        imgContainer.classList.add("upload-icon-img");

        // Adiciona os botões no input upload
        uploadText.style.display = "none";
        buttons.style.display = "block";
    } else {
        // Volta a imagem tradicional
        imgContainer.setAttribute("src", "/assets/images/icon-upload.svg");
        imgContainer.classList.remove("upload-icon-img");

        // Remove os botões
        uploadText.style.display = "block";
        buttons.style.display = "none";
    }
}

export default inputButtonsShow;
