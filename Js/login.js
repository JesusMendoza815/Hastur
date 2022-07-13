const passUser = 123;
const userName = "user";

function log() {
    const userElement = document.getElementById("Id-user");
    const passElement = document.getElementById("Id-pass");
  
    const user = userElement.value;
    const pass = passElement.value;

    if (pass == passUser && user == userName) {
        window.location = '/main.html';
    } else {
        alert('Datos Incorrectos');
    }

}

const loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", log);
