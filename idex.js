const botton = document.getElementById("btn");

botton.addEventListener("click", function (e) {
  e.preventDefault();

  const systemjdid = document.getElementById("sp").value;
  const fll = document.getElementById("ha").value;
  console.log(systemjdid, fll);
  if (!systemjdid || !fll) {
    alert("!اختر التخصص و النطام");
  }

  localStorage.setItem("system", systemjdid);
  localStorage.setItem("matier", fll);

  window.location.href = "pesex.html";
});

let deferredPrompt;
showInstallButton();
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();

  deferredPrompt = e;

  showInstallButton();
});

function showInstallButton() {
  const installBtn = document.getElementById("install-button");
  installBtn.style.display = "block";

  installBtn.addEventListener("click", (e) => {
    deferredPrompt.prompt();

    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      }
      deferredPrompt = null;
    });
  });
}
