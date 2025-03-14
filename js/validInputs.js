class validInputs {
    validImage(value) {
        const error = document.querySelector("#imageError");
        const label = error.querySelector("span");
        const icon = error.querySelector("img");
    
        if(value.length === 0) {
            label.innerHTML = "Por favor, adicione uma imagem válida";
            label.style.color = "var(--error)"
            icon.setAttribute("src", "/assets/images/icon-info-error.svg");
            error.classList.remove("invisible");
            return false
        }
    
        error.classList.add("invisible");
        return true
    }

    validName(value) {
        const error = document.querySelector("#nameError");
        const label = error.querySelector("span");
    
        if(value.length === 0) {
            label.innerHTML = "O campo não pode ficar vazio!"
            error.classList.remove("invisible")
            return false
        }
    
        if(value.length < 5) {
            label.innerHTML = "O campo deve conter pelo menos 5 caracteres!"
            error.classList.remove("invisible")
            return false
        }
    
        error.classList.add("invisible")
        return true
    }

    validEmail(value) {
        const error = document.querySelector("#emailError");
        const label = error.querySelector("span");
    
        if(value.length === 0) {
            label.innerHTML = "O campo não pode ficar vazio!";
            error.classList.remove("invisible")
            return false;
        }
    
        if(!value.includes("@")) {
            label.innerHTML = "O e-mail deve conter '@'";
            error.classList.remove("invisible")
            return false;
        }
    
        if(!value.includes(".com")) {
            label.innerHTML = "O e-mail deve conter '.com'";
            error.classList.remove("invisible")
            return false;
        }
    
        error.classList.add("invisible")
        return true;
    }

    validGithub(value) {
        const error  = document.querySelector("#githubError");
        const label = error.querySelector("span");
    
        if(value.length === 0) {
            label.innerHTML = "O campo não pode ficar vazio!";
            error.classList.remove("invisible")
            return false;
        }
    
        if(value[0] !== "@") {
            label.innerHTML = "O usuário deve conter começar com '@'";
            error.classList.remove("invisible")
            return false;
        }
    
        if(value.length < 4) {
            label.innerHTML = "O campo deve conter pelo menos 4 caracteres!"
            error.classList.remove("invisible")
            return false
        }
    
        error.classList.add("invisible")
        return true
    }
}

export default validInputs;
