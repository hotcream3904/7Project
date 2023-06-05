const mainPage = () => {
  const 최은지 = document.querySelector(".최은지");
  const 서명진 = document.querySelector(".서명진");
  const 김다솔 = document.querySelector(".김다솔");
  const 정소희 = document.querySelector(".정소희");
  const 최수지 = document.querySelector(".최수지");
  const 박준영 = document.querySelector(".박준영");

  최은지.addEventListener("click", (e) => {
    e.preventDefault();
    location.href = "최은지/ej.html";
  });
  서명진.addEventListener("click", (e) => {
    e.preventDefault();
    location.href = "서명진/mj.html";
  });

  김다솔.addEventListener("click", (e) => {
    e.preventDefault();
    location.href = "김다솔/ds.html";
  });
  정소희.addEventListener("click", (e) => {
    e.preventDefault();
    location.href = "정소희/sh.html";
  });
  최수지.addEventListener("click", (e) => {
    e.preventDefault();
    location.href = "최수지/sj.html";
  });
  박준영.addEventListener("click", (e) => {
    e.preventDefault();
    location.href = "박준영/jy.html";
  });
};

mainPage();


