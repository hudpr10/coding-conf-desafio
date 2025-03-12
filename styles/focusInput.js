const inputUpload = document.querySelector(".input-upload-container");
inputUpload.addEventListener("click", () => {
    inputUpload.style.outline = "2px solid var(--neutral-500)"
    inputUpload.style.outlineOffset = "2px"

    setTimeout(() => {
        inputUpload.style.outline = "none"
    }, 1000)
});
