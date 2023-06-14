// STEP 1
const signIn = document.getElementById("signIn");

// STEP 2
signIn.textContent = "Sign In";

// STEP 3
signIn.addEventListener("click", (event) => {
  // STEP 4
  event.preventDefault();

  // STEP 5
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // STEP 6
  signIn.textContent = "Loading...";
  signIn.classList.add("pulse");

  // STEP 7
  if (email === "" || password === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: "All fields are required",
    });

    signIn.textContent = "Sign In";
    signIn.classList.remove("pulse");
  }
  // STEP 8a
  else {
    // 8b
    const signInData = new FormData();

    // 8c
    signInData.append("email", email);
    signInData.append("password", password);

    // 8d
    const signReq = {
      method: "POST",
      body: signInData,
    };

    // 8e
    const URL = "https://pluralcodesandbox.com/yorubalearning/api/admin_login";

    // STEP 9
    fetch(URL, signReq)
      // STEP 10
      .then((response) => response.json())

      // STEP 11
      .then((result) => {
        console.log(result, result.status);

        // STEP 12
        localStorage.setItem("adminObj", JSON.stringify(result));

        // STEP 13
        const getAdminObj = localStorage.getItem("adminObj");

        // STEP 14
        const adminObj = JSON.parse(getAdminObj);

        // STEP 15
        if (adminObj.hasOwnProperty("email")) {
          location.href = "dashboard.html";
        }
        // STEP 16
        else {
          Swal.fire({
            icon: "warning",
            title: "Login Unsuccessful",
            text: "Invalid email or password",
          });
        }

        // STEP 17
        signIn.textContent = "Sign In";
        signIn.classList.remove("pulse");
      })

      // STEP 18
      .catch((error) => {
        console.log("Error", error);
      });
  }
});
