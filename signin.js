const signIn = document.getElementById("signin");

signIn.textContent = "Sign In";

signIn.addEventListener("click", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signIn.textContent = "Loading...";
  signIn.classList.add("pulse");

  if (email === "" || password === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: "All fields are required",
    });

    signIn.textContent = "Sign In";
    signIn.classList.remove("pulse");
  } else {
    const signInData = new FormData();
    signInData.append("email", email);
    signInData.append("password", password);

    const signReq = {
      method: "POST",
      body: signInData,
    };

    const URL = "https://pluralcodesandbox.com/yorubalearning/api/admin_login";

    fetch(URL, signReq)
      .then((response) => response.json())
      .then((result) => {
        console.log(result, result.status);

        localStorage.setItem("adminObj", JSON.stringify(result));

        const getAdminObj = localStorage.getItem("adminObj");

        const adminObj = JSON.parse(getAdminObj);

        if (adminObj.hasOwnProperty("email")) {
          location.href = "dashboard.html";
        } else {
          Swal.fire({
            icon: "warning",
            title: "Login Unsuccessful",
            text: "Invalid email or password",
          });
        }

        signIn.textContent = "Sign In";
        signIn.classList.remove("pulse");
      })

      .catch((error) => console.log(error));
  }
});
