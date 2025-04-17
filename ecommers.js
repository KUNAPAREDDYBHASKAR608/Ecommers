function login(event) {
    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username && password) {
      // Hide login, show store
      document.getElementById("loginSection").style.display = "none";
      document.getElementById("storeSection").style.display = "block";
    } else {
      alert("Enter valid credentials");
    }
  }



 
const searchInput = document.querySelector(".searchInput");

searchInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault(); // Prevent form submission
    const searchTerm = searchInput.value.toLowerCase().trim();

    // Match against IDs
    const section = document.getElementById(searchTerm);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      alert("Shoe not found! Try keywords like: airforce, jorden, blazer, crater, hippie");
    }

    // Optional: clear the search box
    searchInput.value = "";
  }
});