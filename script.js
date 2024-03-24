document.addEventListener("DOMContentLoaded", function () {
  // Navigation items
  const navItems = document.querySelectorAll("nav ul li");
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Perform navigation or action based on the clicked item
      console.log(`Clicked ${item.innerText}`);
    });
  });

  // Search functionality
  const searchInput = document.querySelector(".search");
  searchInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      const searchQuery = searchInput.value;
      // Perform search based on the query
      console.log(`Searching for: ${searchQuery}`);
    }
  });

  // Profile, Wishlist, Bag icons functionality
  const profileIcon = document.querySelector(".profile");
  const wishlistIcon = document.querySelector(".wishlist");
  const bagIcon = document.querySelector(".bag");

  profileIcon.addEventListener("click", () => {
    // Navigate to profile page or perform relevant action
    console.log("Clicked profile icon");
  });

  wishlistIcon.addEventListener("click", () => {
    // Navigate to wishlist page or perform relevant action
    console.log("Clicked wishlist icon");
  });

  bagIcon.addEventListener("click", () => {
    // Navigate to bag page or perform relevant action
    console.log("Clicked bag icon");
  });
});
