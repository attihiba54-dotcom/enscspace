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

window.addEventListener('beforeinstallprompt', (e) => {
  // يمنع المتصفح من إظهار الرسالة الأوتوماتيكية
  e.preventDefault();
  // يخزن الحدث باش نستعملوه بعدين
  deferredPrompt = e;
  // هنا تقدر تظهر الزر تاعك في الموقع
  showInstallButton();
});

function showInstallButton() {
  // أظهر زر في صفحتك مكتوب فيه "ثبت التطبيق"
  const installBtn = document.getElementById('install-button');
  installBtn.style.display = 'block';
  
  installBtn.addEventListener('click', (e) => {
    // يظهر رسالة التثبيت تاع المتصفح
    deferredPrompt.prompt();
    // يستنى رد المستخدم
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      }
      deferredPrompt = null;
    });
  });
}