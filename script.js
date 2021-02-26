window.addEventListener('DOMContentLoaded', () => {
   const email = document.getElementById("email");
   const password = document.getElementById("password");
   const login = document.getElementById("login");
   const form = document.querySelector(".login-form");
   
   email.addEventListener("input", () => {
     let len = email.value.length;
     if (len >= 1 && len <= 5){
       email.classList.add("error")
     }
     else {
       email.classList.remove("error")
     }
   })

   form.addEventListener("submit", (e) => {
      e.preventDefault();
   })
   
   
})