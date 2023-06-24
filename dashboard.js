const lists = document.getElementsByTagName("li");

function activeLink() {
  for (const list of lists) {
    if (!list.classList.contains("head-nav")) {
      list.classList.remove("hovered");
    }
  }
  if (!this.classList.contains("head-nav")) {
    this.classList.add("hovered");
  }
}

for (const list of lists) {
  list.addEventListener("mouseover", () => {
    activeLink.call(list);
  });
}

let toggle = document.querySelector(".bx-menu");
let main = document.querySelector("main");

// Add "active" class for screens medium and below
if (window.matchMedia("(max-width: 992px)").matches) {
  main.classList.add("active");
}

toggle.addEventListener("click", function () {
  main.classList.toggle("active");
});

const learnMat = document.getElementById("learnMat");
if (window.matchMedia("(max-width: 768px)").matches) {
  learnMat.textContent = "Learning Mat.";
}

// STEP 1
function fetchDashboardData() {
  // STEP 2
  const pageModal = document.getElementById("pageModal");
  pageModal.style.display = "flex";

  // STEP 3
  const authToken = localStorage.getItem("adminObj");
  const tokenAcquired = JSON.parse(authToken);
  const token = tokenAcquired.token;

  // STEP 4
  const headers = new Headers();

  // STEP 5
  headers.append("Authorization", `Bearer ${token}`);

  // STEP 6
  const request = {
    method: "GET",
    headers: headers,
  };

  // STEP 7
  const URL =
    "https://pluralcodesandbox.com/yorubalearning/api/admin/admin_dashboardapi";

  // STEP 8
  const resultData = [];

  // STEP 9
  fetch(URL, request)
    // STEP 10
    .then((response) => response.json())

    // STEP 11
    .then((result) => {
      console.log(result);

      // STEP 12
      const getCategory = document.getElementById("category");
      getCategory.innerHTML = `${result.total_number_of_categories}`;

      const getLearningMaterials = document.getElementById("learningMaterials");
      getLearningMaterials.innerHTML = `${result.total_number_of_learning_materials}`;

      const getSubCategories = document.getElementById("subCategories");
      getSubCategories.innerHTML = `${result.total_number_of_sub_categories}`;

      const getTotalQuiz = document.getElementById("totalQuiz");
      getTotalQuiz.innerHTML = `${result.total_number_of_quizzes}`;

      const getTotalStudents = document.getElementById("totalStudents");
      getTotalStudents.innerHTML = `${result.total_number_of_students}`;

      const getAdminUsername = document.getElementById("adminUsername");
      getAdminUsername.innerHTML = `${tokenAcquired.username}`;

      // STEP 13
      pageModal.style.display = "none";
    })
    // STEP 14
    .catch((error) => console.log("error", error));
}

// STEP 15
fetchDashboardData();
