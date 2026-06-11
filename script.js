const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        darkModeBtn.innerHTML = "☀️ Light Mode";
    }
    else{
        darkModeBtn.innerHTML = "🌙 Dark Mode";
    }

});