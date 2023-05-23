const jyPage = () => {
  const hi = document.querySelector(".hi");

  hi.addEventListener("click", (e) => {
    e.preventDefault();
    alert("경고!!!!!!!!!!!!!!!");
  });
};

jyPage();
