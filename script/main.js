let searchIcon, searchBar;
searchIcon = document.getElementById("search-icon");
searchBar = document.querySelector(".search-bar");

// searchIcon.addEventListener("click", function() {
//   searchBar.style.display = (searchBar.style.display === "none") ? "block" : "none";
// });

searchIcon.addEventListener("click", function(){
  searchBar.classList.toggle("visible");
});