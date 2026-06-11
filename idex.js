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
