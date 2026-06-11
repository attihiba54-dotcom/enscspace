const botton = document.getElementById("btn");

botton.addEventListener("click", function (e) {
  e.preventDefault();

  // نقرأ القيم بالـ IDs الصافيين اللي راهم عندك في الـ HTML
  const systemjdid = document.getElementById("sp").value;
  const fll = document.getElementById("ha").value;
  console.log(systemjdid, fll);
  if (!systemjdid || !fll) {
    alert("!اختر التخصص و النطام");
  }
  // نخبوهم في الخزانة
  localStorage.setItem("system", systemjdid);
  localStorage.setItem("matier", fll);

  // نتحولوا لصفحة الامتحانات ديريكت
  window.location.href = "pepex.html";
});