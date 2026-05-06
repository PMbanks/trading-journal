// PAGE TRANSITION
function go(page){
    document.body.classList.add("fade-out");
    setTimeout(()=>window.location=page,200);
}

// NAME
function loadUser(){
    let name = localStorage.getItem("username");
    if(!name){
        name = prompt("Enter your name:");
        localStorage.setItem("username", name);
    }
    document.querySelectorAll(".username").forEach(e=>e.innerText=name);
}

// CHANGE NAME
function changeName(){
    const n1 = document.getElementById("n1").value;
    const n2 = document.getElementById("n2").value;

    if(n1 && n1===n2){
        localStorage.setItem("username", n1);
        showToast("Name updated");
        setTimeout(()=>location.reload(),800);
    } else {
        showToast("Names do not match");
    }
}

// THEME
function setTheme(t){
    document.body.className = t;
    localStorage.setItem("theme", t);
    showToast("Theme applied");
}

// LOAD THEME
const th = localStorage.getItem("theme");
if(th) document.body.className = th;

// PREMIUM
function unlockPremium(){
    const pass = prompt("Enter password");
    if(pass === "banks"){
        localStorage.setItem("premium", true);
        showToast("Premium unlocked 🔥");
    } else {
        showToast("Wrong password");
    }
}

// RESET
function resetAll(){
    if(confirm("Reset everything?")){
        if(confirm("This cannot be undone")){
            localStorage.clear();
            location.reload();
        }
    }
}

// TOAST
function showToast(msg){
    let t = document.getElementById("toast");
    t.innerText = msg;
    t.classList.add("show");
    setTimeout(()=>t.classList.remove("show"),2000);
}
function togglePanel(){
    document.getElementById("settingsModal").classList.add("active");
}

function closeSettingsModal(){
    document.getElementById("settingsModal").classList.remove("active");
}