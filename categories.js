// STEP 1
// STEP 2
const categoryNameInput = document.getElementById("categoryName");
const categoryImageInput = document.getElementById("categoryImage");
const createCategoryBtn = document.getElementById("createCategoryBtn");

createCategoryBtn.addEventListener("click", createCategory);

function createCategory() {
  // STEP 3
  createCategoryBtn.classList.add("pulse");
  createCategoryBtn.textContent = "Sending";

  // STEP 4a
  const categoryName = categoryNameInput.value.trim();
  const categoryImage = categoryImageInput.value.trim();

  if (categoryName === "" || categoryImage === "") {
    alert("All fields are required");
    // STEP 4b
    createCategoryBtn.classList.remove("pulse");
    createCategoryBtn.textContent = "Create Category";
    return;
  }

  // STEP 5
  const authToken = localStorage.getItem("adminObj");
  const tokenAcquired = JSON.parse(authToken);
  const token = tokenAcquired.token;

  // STEP 6
  const headers = new Headers();
  headers.append("Authorization", `Bearer ${token}`);

  // STEP 7
  const formData = new FormData();
  formData.append("name", categoryName);
  formData.append("image", categoryImage);

  // STEP 8
  const categoryRequest = {
    method: "POST",
    headers: headers,
    body: formData,
  };

  // STEP 9
  const URL =
    "https://pluralcodesandbox.com/yorubalearning/api/admin/create_category";

  // STEP 10
  fetch(URL, categoryRequest)
    // STEP 11
    .then((response) => response.json())
    // STEP 12
    .then((result) => {
      console.log(result);
      // STEP 13
      if (result.status === "success") {
        alert("Category successfully created");
        setTimeout(() => {
          window.location.href = "categories.html";
        }, 5000);
      } else {
        // STEP 14
        alert("Category not created");
      }
      // STEP 15
      createCategoryBtn.classList.remove("pulse");
      createCategoryBtn.textContent = "Create Category";
    })
    // STEP 15
    .catch((error) => {
      console.log("Error:", error);
    });
}
