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

  // STEP 4
  const tokenAcquired = JSON.parse(authToken);

  // STEP 5
  const token = tokenAcquired.token;

  // STEP 6
  const headers = new Headers();

  // STEP 7
  headers.append("Authorization", `Bearer ${token}`);

  // STEP 8
  const request = {
    method: "GET",
    headers: headers,
  };

  // STEP 9
  const URL =
    "https://pluralcodesandbox.com/yorubalearning/api/admin/admin_dashboardapi";

  // STEP 9b
  const resultData = [];

  // STEP 10
  fetch(URL, request)
    // STEP 11
    .then((response) => response.json())

    // STEP 12
    .then((result) => {
      console.log(result);

      // STEP 13 & 14
      const getCategory = document.getElementById("category");
      getCategory.innerHTML = `${result.total_number_of_categories}`;

      const getLearningMaterials = document.getElementById("learningMaterials");
      getLearningMaterials.innerHTML = `${result.total_number_of_learningmaterial}`;

      const getSubCategories = document.getElementById("subCategories");
      getSubCategories.innerHTML = `${result.total_number_of_categories}`;

      const getTotalQuiz = document.getElementById("totalQuiz");
      getTotalQuiz.innerHTML = `${result.total_number_of_quize}`;

      const getTotalStudents = document.getElementById("totalStudents");
      getTotalStudents.innerHTML = `${result.total_number_of_students}`;

      const getAdminUsername = document.getElementById("adminUsername");
      getAdminUsername.innerHTML = `${result.admin_name}`;

      // STEP 15
      pageModal.style.display = "none";
    })
    // STEP 15b
    .catch((error) => console.log("error", error));
}

// STEP 16
fetchDashboardData();

// Top 3 students
// STEP 1
const topThreeStudentsBtn = document.getElementById("topThreeStudent");

// STEP 2
topThreeStudentsBtn.addEventListener("click", (event) => {
  // STEP 3
  event.preventDefault();

  // STEP 4
  const studentModal = document.getElementById("studentModal");

  studentModal.style.display = "block";

  // STEP 5
  const authToken = localStorage.getItem("adminObj");
  const tokenAcquired = JSON.parse(authToken);
  const token = tokenAcquired.token;

  // STEP 6
  const headers = new Headers();

  // STEP 7
  headers.append("Authorization", `Bearer ${token}`);

  // STEP 8
  const request = {
    method: "GET",
    headers: headers,
  };

  // STEP 9
  const URL =
    "https://pluralcodesandbox.com/yorubalearning/api/admin/top_three_students";

  // STEP 10
  const resultData = [];

  // STEP 11
  fetch(URL, request)
    // STEP 12
    .then((response) => response.json())

    // STEP 13
    .then((result) => {
      console.log(result);
      // STEP 14
      const getBestStudents = document.getElementById("topThreeScores");

      // STEP 15
      if (result.length === 0) {
        getBestStudents.innerHTML = "No Information Found";
      }

      // STEP 16
      result.map((item) => {
        resultData.push(`
          <div class="search-card">
            <div class="card">
              <p>Name:</p>
              <p>${item.name}</p>
            </div>
            <div class="card">
              <p>Email:</p>
              <p>${item.email}</p>
            </div>
            <div class="card">
              <p>Phone Number:</p>
              <p>${item.phone_number}</p>
            </div>
            <div class="card">
              <p>Position:</p>
              <p>${item.position}</p>
            </div>
            <div class="card">
              <p>Total Score:</p>
              <p>${item.total_score}</p>
            </div>
          </div>
        `);
      });

      // STEP 17
      getBestStudents.innerHTML = resultData.join("");

      // STEP 18
      studentModal.classList.add("show");
    })
    // STEP 19
    .catch((error) => {
      console.log("Error:", error);
    });
});

// Function to close the student modal
function closeStudentModal() {
  const studentModal = document.getElementById("studentModal");
  studentModal.style.display = "none";
}

// GET ALL STUDENTS

// STEP 1 - Create a function that gets all students
function fetchAllStudents() {
  const table = document.getElementById("table");
  table.style.display = "block";
  // STEP 2
  const authToken = localStorage.getItem("adminObj");

  // STEP 3
  const tokenAcquired = JSON.parse(authToken);

  // STEP 4
  const token = tokenAcquired.token;

  // STEP 5
  const headers = new Headers();
  headers.append("Authorization", `Bearer ${token}`);

  // STEP 6
  const request = {
    method: "GET",
    headers: headers,
  };

  // STEP 7
  const resultData = [];

  // STEP 8
  const URL =
    "https://pluralcodesandbox.com/yorubalearning/api/admin/get_all_students";

  // STEP 9
  fetch(URL, request)
    // STEP 10
    .then((response) => response.json())

    // STEP 10a
    .then((result) => {
      console.log(result);

      // STEP 10b
      const tableContainer = document.getElementById("allStudents");

      // STEP 10c
      if (result.length === 0) {
        tableContainer.innerHTML = "No Registered Student";
      } else {
        result.map((item) => {
          resultData.push(`
            <tr>
              <td>${item.name}</td>
              <td>${item.email}</td>
              <td>${item.phone_number}</td>
              <td>${item.position}</td>
              <td>${item.total_score}</td>
            </tr>
          `);
        });

        tableContainer.innerHTML = resultData.join("");
      }
    })
    // STEP 10d
    .catch((error) => console.log("Error:", error));
}

// STEP 11 - Call the fetchAllStudents function
fetchAllStudents();
