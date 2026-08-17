document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const siteNav = document.getElementById("siteNav");

  // ハンバーガーボタンクリックで開閉
  menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle("active");
    siteNav.classList.toggle("open");
  });

  // メニュー内のリンクをクリックしたら自動で閉じる
  const navLinks = siteNav.querySelectorAll("a");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      menuToggle.classList.remove("active");
      siteNav.classList.remove("open");
    });
  });

  // 画面幅がPCサイズに戻ったらメニュー状態をリセット
  window.addEventListener("resize", function () {
    if (window.innerWidth > 900) {
      menuToggle.classList.remove("active");
      siteNav.classList.remove("open");
    }
  });
});
