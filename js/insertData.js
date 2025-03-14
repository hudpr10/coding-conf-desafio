const data = JSON.parse(localStorage.getItem("data"));
if(data.img && data.name && data.email && data.githubUser && data.code) {
    insertData(data.img, data.name, data.email, data.githubUser, data.code);
} else {
    alert("AVISO! Você deve preencher o formulário antes de entrar nessa página");
    window.location.href = "/index.html"
}

function insertData(img, name, email, githubUser, code) {
    const textName = document.querySelector("#textName");
    textName.innerHTML = `${name}!`;

    const textEmail = document.querySelector("#textEmail");
    textEmail.innerHTML = email;

    const ticketName = document.querySelector("#ticketName");
    ticketName.innerHTML = name;

    const ticketImg = document.querySelector("#ticketImg");
    ticketImg.setAttribute("src", img);

    const ticketGithub = document.querySelector("#ticketGithub");
    ticketGithub.innerHTML = githubUser;

    const ticketCode = document.querySelector("#ticketCode");
    ticketCode.innerHTML = `#${code}`;
}