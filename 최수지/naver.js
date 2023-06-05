const loginPage = ()=>{
  let users = JSON.parse(localStorage.getItem("users"));
  if (users === null) {
    localStorage.setItem("users", JSON.stringify([]));
  }

  const login = document.querySelector(".loginBtn")
  const id = document.getElementById("id")
  const pw = document.getElementById("pw")
  

  login.addEventListener("click", (e) => {
    e.preventDefault();
    users.push({
        id : id.value,
        pw : pw.value})

    localStorage.setItem("users", JSON.stringify(users));
  });

  

}

loginPage();